import  {exec} from 'child_process'

export default function checkProcess(){
const res = exec('tasklist', {maxBuffer: 1024 * 500},(error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(stdout.toString())
  })

}