/*export default function error(err) {
  if (typeof err === 'empty') {
    console.log(2);
    return 'empty';
  }
}*/
export function hello(text) {
  const div = document.createElement('div');
  div.textContent = `Hello ${text}`;
  document.body.appendChild(div);
}
