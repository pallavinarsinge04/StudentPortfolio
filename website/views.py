from django.shortcuts import render, redirect
from django.core.mail import send_mail
from .models import Contact
from django.conf import settings

def home(request):
    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        Contact.objects.create(
            name=name,
            email=email,
            message=message
        )

        send_mail(
            subject=f"Portfolio Contact from {name}",
            message=f"""
Name: {name}

Email: {email}

Message:
{message}
""",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=["pallavinarsinge123@gmail.com"],
            fail_silently=False,
        )
        return redirect("home")

    return render(request, "home.html")