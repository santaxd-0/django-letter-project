from django.urls import path

from .views import (
    LettersPage,
    LettersApiEndpoint
)

app_name = "letter"
urlpatterns = [
    path("", LettersPage.as_view(), name="letters_page"),
    path("api/letters", LettersApiEndpoint.as_view(), name="letters_api")
]