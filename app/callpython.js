var PythonShell = require('python-shell');

var options = {
  mode: 'text', //can be json or binary, too
  encoding : 'utf8'
  pythonPath: 'path/to/python',
  scriptPath: 'path/to/my/scripts',
  args: ['idvalue']
};


PythonShell.run('my_script.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});

/*  EXAMPLE FOR ONGOING COMMUNICATIONS
var pyshell = new PythonShell('my_script.py', options); //constructor is script, options

// sends a message to the Python script via stdin
pyshell.send('hello');

pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
});

*/

/*
OPTIONS FOR PythonShell constructor:
mode: Configures how data is exchanged when data flows through stdin and stdout. The possible values are:
  text: each line of data (ending with "\n") is emitted as a message (default)
  json: each line of data (ending with "\n") is parsed as JSON and emitted as a message
  binary: data is streamed as-is through stdout and stdin
formatter: each message to send is transformed using this method, then appended with "\n"
parser: each line of data (ending with "\n") is parsed with this function and its result is emitted as a message
encoding: the text encoding to apply on the child process streams (default: "utf8")
pythonPath: The path where to locate the "python" executable. Default: "python"
pythonOptions: Array of option switches to pass to "python"
scriptPath: The default path where to look for scripts. Default is the current working directory.
args: Array of arguments to pass to the script
*/

/*
PROPERTIES OF PythonShell instance:
script: the path of the script to execute
command: the full command arguments passed to the Python executable
stdin: the Python stdin stream, used to send data to the child process
stdout: the Python stdout stream, used for receiving data from the child process
stderr: the Python stderr stream, used for communicating errors
childProcess: the process instance created via child_process.spawn
terminated: boolean indicating whether the process has exited
exitCode: the process exit code, available after the process has ended
*/

/*
FUNCTIONS OF PythonShell:
run(script, options, callback)
.send(message)
  Sends a message to the Python script via stdin. The data is formatted according to the selected mode (text or JSON), or through a custom function when formatter is specified.
receive(data)
  Parses incoming data from the Python script written via stdout and emits message events. This method is called automatically as data is being received from stdout.

end(callback)
  Closes the stdin stream, allowing the Python script to finish and exit. The optional callback is invoked when the process is terminated.
*/
