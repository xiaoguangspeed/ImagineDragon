### One of the processes is the master process and another is the worker process.
### nginx has one master process and several worker processes. The main purpose of the master process is to read and evaluate configuration, and maintain worker processes. Worker processes do actual processing of requests

# ps -ax | grep nginx
# kill -s QUIT 1628
