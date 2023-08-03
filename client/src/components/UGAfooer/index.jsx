import React from 'react'
import './css/uga-footer.css'
export default function UGAfooter() {
  return (
	<div>
		<footer class="ugafooter">
			<div class="ugafooter__container">
				<div class="ugafooter__row ugafooter__row--primary">                    
					<div class="ugafooter__logo">
					   <a class="ugafooter__logo-link" href="https://www.uga.edu/">University of Georgia</a>
					</div>
					<nav class="ugafooter__links">
						<ul class="ugafooter__links-list">
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="https://www.uga.edu/a-z/schools/">Schools and Colleges</a>
							</li>
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="https://peoplesearch.uga.edu/">Directory</a>
							</li>
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="https://my.uga.edu/">MyUGA</a>
							</li>
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="http://hr.uga.edu/applicants/">Employment Opportunities</a>
							</li>
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="https://mc.uga.edu/policy/trademark">Copyright and Trademarks</a>
							</li>
							<li class="ugafooter__links-list-item">
								<a class="ugafooter__links-list-link" href="https://eits.uga.edu/access_and_security/infosec/pols_regs/policies/privacy/">Privacy</a>
							</li>
						</ul>
					</nav>
				</div>
				<div class="ugafooter__row ugafooter__row--secondary">
					<nav class="ugafooter__social">
						<span class="ugafooter__social-label">#UGA on</span>
						<a class="ugafooter__social-link" aria-label="UGA on Facebook" href="https://www.facebook.com/universityofga/">
						<svg class="svg-inline--fa fa-facebook-f fa-w-9 fa-fw" title="Facebook"  aria-labelledby="svg-inline--fa-title-1" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-50 0 512 512" data-fa-i2svg=""><title id="svg-inline--fa-title-1">Facebook</title><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
						</a>
						<a class="ugafooter__social-link" aria-label="UGA on Twitter" href="https://twitter.com/universityofga">
						<svg class="svg-inline--fa fa-twitter fa-w-16 fa-fw" title="Twitter" aria-labelledby="svg-inline--fa-title-2" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><title id="svg-inline--fa-title-2">Twitter</title><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
						</a>
						<a class="ugafooter__social-link" aria-label="UGA on Instagram" href="https://www.instagram.com/universityofga/">
						<svg class="svg-inline--fa fa-instagram fa-w-14 fa-fw" title="Instagram" aria-labelledby="svg-inline--fa-title-3" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><title id="svg-inline--fa-title-3">Instagram</title><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
						</a>
						<a class="ugafooter__social-link" aria-label="UGA on Snapchat" href="https://www.snapchat.com/add/university-ga">
						<svg class="svg-inline--fa fa-snapchat-ghost fa-w-16 fa-fw" title="Snapchat"  aria-labelledby="svg-inline--fa-title-4" data-prefix="fab" data-icon="snapchat-ghost" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><title id="svg-inline--fa-title-4">Snapchat</title><path fill="currentColor" d="M510.846 392.673c-5.211 12.157-27.239 21.089-67.36 27.318-2.064 2.786-3.775 14.686-6.507 23.956-1.625 5.566-5.623 8.869-12.128 8.869l-.297-.005c-9.395 0-19.203-4.323-38.852-4.323-26.521 0-35.662 6.043-56.254 20.588-21.832 15.438-42.771 28.764-74.027 27.399-31.646 2.334-58.025-16.908-72.871-27.404-20.714-14.643-29.828-20.582-56.241-20.582-18.864 0-30.736 4.72-38.852 4.72-8.073 0-11.213-4.922-12.422-9.04-2.703-9.189-4.404-21.263-6.523-24.13-20.679-3.209-67.31-11.344-68.498-32.15a10.627 10.627 0 0 1 8.877-11.069c69.583-11.455 100.924-82.901 102.227-85.934.074-.176.155-.344.237-.515 3.713-7.537 4.544-13.849 2.463-18.753-5.05-11.896-26.872-16.164-36.053-19.796-23.715-9.366-27.015-20.128-25.612-27.504 2.437-12.836 21.725-20.735 33.002-15.453 8.919 4.181 16.843 6.297 23.547 6.297 5.022 0 8.212-1.204 9.96-2.171-2.043-35.936-7.101-87.29 5.687-115.969C158.122 21.304 229.705 15.42 250.826 15.42c.944 0 9.141-.089 10.11-.089 52.148 0 102.254 26.78 126.723 81.643 12.777 28.65 7.749 79.792 5.695 116.009 1.582.872 4.357 1.942 8.599 2.139 6.397-.286 13.815-2.389 22.069-6.257 6.085-2.846 14.406-2.461 20.48.058l.029.01c9.476 3.385 15.439 10.215 15.589 17.87.184 9.747-8.522 18.165-25.878 25.018-2.118.835-4.694 1.655-7.434 2.525-9.797 3.106-24.6 7.805-28.616 17.271-2.079 4.904-1.256 11.211 2.46 18.748.087.168.166.342.239.515 1.301 3.03 32.615 74.46 102.23 85.934 6.427 1.058 11.163 7.877 7.725 15.859z"></path></svg>
						</a>
						<a class="ugafooter__social-link" aria-label="UGA on YouTube" href="https://www.youtube.com/user/UniversityOfGeorgia">
						<svg class="svg-inline--fa fa-youtube fa-w-18 fa-fw" title="YouTube" aria-labelledby="svg-inline--fa-title-5" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><title id="svg-inline--fa-title-5">YouTube</title><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
						</a>
						<a class="ugafooter__social-link" aria-label="UGA on LinkedIn" href="https://www.linkedin.com/school/university-of-georgia/">
						<svg class="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" title="LinkedIn" aria-labelledby="svg-inline--fa-title-6" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><title id="svg-inline--fa-title-6">LinkedIn</title><path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></svg>
						</a>
					</nav>
					<div class="ugafooter__address">
						&copy; University of Georgia, Athens, GA 30602 <br />
						706&#8209;542&#8209;3000
					</div>
				</div>
			</div>
		</footer>
		<script src="./js/uga-footer.js"></script>
	</div>
  )
}


