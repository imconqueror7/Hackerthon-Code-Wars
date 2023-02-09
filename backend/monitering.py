import re
import requests

def detect_fault_injection(request):
    # Use regular expressions to identify common attack patterns
    sql_injection_pattern = re.compile(r'(\'|\")(\s*)(union|select|from|where)(\s*)')
    xss_pattern = re.compile(r'(\<|\>|\;|\(|\))')
    csrf_pattern = re.compile(r'(\?|\&)(csrf|token)\=')

    # Check the parameters for signs of fault injection
    for key, value in request.items():
        if re.search(sql_injection_pattern, value):
            return 'SQL injection detected'
        elif re.search(xss_pattern, value):
            return 'XSS detected'
        elif re.search(csrf_pattern, value):
            return 'CSRF detected'

    # Check the headers for signs of fault injection
    for key, value in request.headers.items():
        if re.search(sql_injection_pattern, value):
            return 'SQL injection detected'
        elif re.search(xss_pattern, value):
            return 'XSS detected'
        elif re.search(csrf_pattern, value):
            return 'CSRF detected'

    return None

def monitor_behavior(requests_log):
    # Keep track of the number of requests and response times
    num_requests = 0
    response_times = []

    # Iterate over the requests log
    for request in requests_log:
        num_requests += 1
        response_times.append(request['response_time'])

    # Calculate the average response time
    average_response_time = sum(response_times) / num_requests

    # Check for abnormal behavior
    if num_requests > 1000 and average_response_time > 500:
        return 'High traffic detected'
    elif num_requests > 1000 and average_response_time < 100:
        return 'Bot activity detected'
    else:
        return None

# Example usage
requests_log = []

while True:
    # Capture incoming requests
    request = requests.get('http://www.example.com')
    requests_log.append({
        'request': request,
        'response_time': request.elapsed.total_seconds()
    })

    # Check for fault injection
    injection = detect_fault_injection(request)
    if injection:
        print(f'{injection} in request {request}')

    # Monitor behavior
    behavior = monitor_behavior(requests_log)
    if behavior:
        print(f'{behavior} in requests log {requests_log}')
