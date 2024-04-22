from django.urls import path

from .views import NoteDelete, NoteListView, NoteUpdateView

urlpatterns = [
    path("", NoteListView.as_view()),
    path("notes/update/<int:pk>", NoteUpdateView.as_view()),
    path("notes/delete/<int:pk>", NoteDelete.as_view()),
]
