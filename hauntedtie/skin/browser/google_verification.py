# -*- coding: utf-8 -*-

from Products.Five.browser import BrowserView


class GoogleVerification(BrowserView):
    """
    """

    def __call__(self):
        return "google-site-verification: google8fd259d57f0ccc7e.html"
