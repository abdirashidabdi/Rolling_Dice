from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
import random


# Create your views here.


def indexView(request):
    images = [
        'dice1@3x.png',
        'dice2@3x.png',
        'dice3@3x.png',
        'dice4@3x.png',
        'dice5@3x.png',
        'dice6@3x.png',
    ]

    first_img = random.choice(images)
    second_img = random.choice(images)

    mydict = {
        'f': 'first_img',
        's': 'second_img',
    }

    return render(request, 'app/index.html', mydict)
