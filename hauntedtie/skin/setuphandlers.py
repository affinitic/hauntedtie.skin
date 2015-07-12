# -*- coding: utf-8 -*-

from Products.CMFCore.utils import getToolByName


def setupHauntedTie(context):
    if context.readDataFile('hauntedtie.portal_various.txt') is None:
        return
    portal = context.getSite()
    front_page = portal.get('front-page')

    addViewToType(portal, 'Document', 'presskit_view')
    changeFolderView(portal, front_page, 'domiverse_homepage_view')


def changeFolderView(portal, document, viewname):
    addViewToType(portal, 'Document', viewname)
    if document.getLayout() != viewname:
        document.setLayout(viewname)


def addViewToType(portal, typename, templatename):
    pt = getToolByName(portal, 'portal_types')
    foldertype = getattr(pt, typename)
    available_views = list(foldertype.getAvailableViewMethods(portal))
    if templatename not in available_views:
        available_views.append(templatename)
        foldertype.manage_changeProperties(view_methods=available_views)
