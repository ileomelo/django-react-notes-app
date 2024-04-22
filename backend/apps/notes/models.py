from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Notes(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    author = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Note"
        verbose_name_plural = "Notes"

    def __str__(self) -> str:
        return self.title
