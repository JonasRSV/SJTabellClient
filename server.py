from flask import Flask, send_from_directory, request, Request


app = Flask(__name__)

@app.route("/")
def serve_page():
    return send_from_directory(".", "client.html")


@app.route("/resources/<resource>")
def serve_css(resource):
    return send_from_directory(".", resource)

if __name__ == "__main__":
    app.run(debug=None, host="0.0.0.0", port=5000)