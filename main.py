import os
import webapp2
import jinja2

jinja_environment = jinja2.Environment(
  loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))


def is_devserver():
    return os.environ['SERVER_SOFTWARE'].startswith("Dev")


class Main(webapp2.RequestHandler):
    def get(self):
        return webapp2.redirect('http://portfolio.kurtyalcin.com')
        # values = {
        #   'debug': is_devserver()
        # }
        # template = jinja_environment.get_template('templates/index.html')
        # self.response.out.write(template.render(values))


app = webapp2.WSGIApplication([('/', Main)],  debug=True)
