import datetime

def is_letter_expired(time_to_open):
    if time_to_open <= datetime.date.today():
        return True
    return False