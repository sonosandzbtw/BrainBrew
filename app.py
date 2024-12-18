from flask import Flask, render_template

app = Flask(__name__)

# Route for the home page
@app.route("/")
def home():
    return render_template("home.html")

# Route for the timer page
@app.route("/timer")
def timer():
    return render_template("timer.html")

# Route for the settings page
@app.route("/settings")
def settings():
    return render_template("settings.html")

# Route for the about page
@app.route("/about")
def about():
    return render_template("about.html")

# Route for the donate page
@app.route("/donate")
def donate():
    return render_template("donate.html")

# Start the application
if __name__ == "__main__":
    app.run(debug=True)
