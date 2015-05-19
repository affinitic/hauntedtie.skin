# -*- coding: utf-8 -*-

import email

from Products.CMFCore.utils import getToolByName
from Products.Five.browser import BrowserView


CONTACT_MESSAGE = """
You received a new message from: %s

%s
"""


class DomiverseHomepage(BrowserView):
    """
    """

    def newsletter_subscribe(self):
        """
        """
        subscribe_mail = self.request.get('newsletter_email') or ''
        if subscribe_mail:
            self.mailhost.secureSend(
                self.newsletter_message(subscribe_mail),
                u'hauntedtie@gmail.com',
                u'hauntedtie@gmail.com',
                mbcc='hauntedtie@gmail.com',
                subject=(u"Domiverse newsletter subscription"),
                charset='utf-8')

    @staticmethod
    def newsletter_message(subscribe_mail):
        """ Returns the email message """
        content = '%s %s' % ("The following mail must be added to the newsletter list:", subscribe_mail)
        message = email.message_from_string(content)
        message.set_charset('utf-8')
        message['X-Priority'] = email.Header.Header('1')
        return message

    def contact_us(self):
        """
        """
        name = self.request.get('contact_name') or ''
        message = self.request.get('contact_message') or ''
        if name or message:
            self.mailhost.secureSend(
                self.contact_message(name, message),
                u'hauntedtie@gmail.com',
                u'hauntedtie@gmail.com',
                mbcc='hauntedtie@gmail.com',
                subject=(u"Contact from domiverse website"),
                charset='utf-8')

    @staticmethod
    def contact_message(name, message):
        """ Returns the email message """
        content = CONTACT_MESSAGE % (name, message)
        message = email.message_from_string(content)
        message.set_charset('utf-8')
        message['X-Priority'] = email.Header.Header('1')
        return message

    @property
    def mailhost(self):
        """ Returns the mail host from Plone """
        return getToolByName(self.context, 'MailHost')
