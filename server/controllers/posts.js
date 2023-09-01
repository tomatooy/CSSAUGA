import Post from "../models/Post.js";
import puppeteer from "puppeteer";
import axios from "axios";

export const addPost = async (req, res) => {

    try {
        const { coverUrl, wechatUrl, title, createdAt, imageUrl, header, bannerShow } = req.body
        const newPost = new Post({
            coverUrl, wechatUrl, title, createdAt, imageUrl, header, bannerShow
        })
        await newPost.save()
        res.status(200).json(newPost)
    }
    catch (err) {
        res.status(409).json({ message: err.message })
    }
}


export const getPost = async (req, res) => {
    try {
        const post = await Post.find({})
            .sort({ createdAt: -1 }) // Sort by createdAt field in descending order (newest first)
            .limit(6) // Limit the result to 6 posts
        res.json(post)
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getBannerPost = async (req, res) => {
    try {
        const bannerPosts = await Post.find({ bannerShow: true });
        res.json(bannerPosts);
    } catch (error) {
        console.error('Error fetching banner posts:', error);
        res.status(500).json({ message: 'An error occurred' });
    }
}

export const getRecommand = async (req, res) => {
    try {
        const { _id } = req.query
        const newestPosts = await Post.find({ _id: { $ne: _id } })
            .sort({ createdAt: -1 })
            .limit(3);
        res.json(newestPosts)
    }
    catch (err) {
        console.error('Error fetching newest posts:', err);
        res.status(500).json({ message: 'An error occurred' });
    }

}


export const getSinglePost= async (req, res) => {

    const { _id } = req.query
    try {
        const browser = await puppeteer.launch({
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ],
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
        });
        const page = await browser.newPage();
        const {wechatUrl} = await Post.findById(_id)
        const externalURL = wechatUrl;
        await page.goto(externalURL, { waitUntil: 'networkidle2' });

        const scrapedDiv = await page.evaluate(() => {
            const divElement = document.querySelector('div');
            if (!divElement) return '';

            const clonedDiv = divElement.cloneNode(true);

            const clonedImages = clonedDiv.querySelectorAll('img');
            clonedImages.forEach(async (img) => {
                const dataSrc = img.getAttribute('data-src');
                if (dataSrc) {
                    const newImg = document.createElement('img');
                    newImg.setAttribute('src',dataSrc);
                    // Keep the original style and add height: auto
                    const originalStyle = img.getAttribute('style');
                    if (originalStyle) {
                        newImg.setAttribute('style', `${originalStyle}; height: auto !important`);
                    } else {
                        newImg.setAttribute('style', 'height: auto');
                    }

                    img.parentNode.replaceChild(newImg, img);
                } else {
                    img.remove();
                }
            });

            return clonedDiv.outerHTML;
        });

        await browser.close();

        res.send(scrapedDiv);
    } catch (error) {
        console.error('Error scraping div content:', error);
        res.status(500).send('An error occurred while scraping content.');
    }
}

