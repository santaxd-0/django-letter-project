import json
import os
from dotenv import load_dotenv
from django.http import JsonResponse

from ..models import Letter
from ..services.user_service import is_letter_expired
from ..forms import LetterForm

def load_page_api_handler():
    letters = Letter.objects.all()
    letters_json = {}
    for letter in letters:
        letter_json_name = f"letter {letter.id}";
        letter_json = {
            letter_json_name: {
                "id": letter.id,
                "name": letter.name,
                "description": letter.description,
                "date_created": letter.date_created,
                "date_user_can_open_letter": letter.date_user_can_open_letter,
                "is_expired": is_letter_expired(letter.date_user_can_open_letter)
            }
        }
        letters_json.update(letter_json)
    return JsonResponse(letters_json)

def create_api_for_letter(request):
    if request.content_type == 'application/json':
        json_data = json.loads(request.body)
        form_data = {
            'name': json_data.get('name'),
            'description': json_data.get('description'),
            'date_user_can_open_letter': json_data.get('toDate')
        }
        letter_form = LetterForm(form_data)
    else:
        letter_form = LetterForm(request.POST)
    return letter_form

def is_form_valid(letter_form):
    if letter_form.is_valid():
        letter_form.save()
        load_dotenv()
        return JsonResponse(
            {
                "message": "Letter created",
                "redirect_url": os.getenv("HOST_1")
            },
            status=201
        )
    else:
        return JsonResponse({"message": "Something went wrong"}, status=400)