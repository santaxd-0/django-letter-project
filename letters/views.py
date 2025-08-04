from django.http import Http404
from django.core.exceptions import BadRequest
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import (
    ensure_csrf_cookie,
    csrf_exempt
)
from django.views.generic import (
    TemplateView,
    View,
)

from .handlers.handlers import (
    load_page_api_handler,
    create_api_for_letter,
    is_form_valid,
)


# Renders page
@method_decorator(ensure_csrf_cookie, name="dispatch")
class LettersPage(TemplateView):
    template_name = "letters/index.html"

#Page with letters api
@method_decorator(csrf_exempt, name="dispatch")
class LettersApiEndpoint(View):
    
    def get(self, request):
        try:
            return load_page_api_handler()
        except BadRequest:
            return Http404("Something went wrong")
    
    def post(self, request):
        letter_form = create_api_for_letter(request)
        return is_form_valid(letter_form)