/* function taskFirst to instantiate variables using const */
/* function taskNext to instantiate variables using let */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
