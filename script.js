  /* A simple example of activating a template with a clone */
  let template = document.querySelector('#producttemplate');
  var clone = document.importNode(template.content, true);
  clone.querySelector('#lblName').textContent = 'R.E.T.';
  clone.querySelector('#pimage').src = 'images/robot1.png';
  document.body.appendChild(clone)
