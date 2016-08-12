# -*- coding: utf-8 -*-

version = '0.1'

from setuptools import setup, find_packages

long_description = (open('README.rst').read() + '\n')

setup(name='hauntedtie.skin',
      version=version,
      description="Skin package for hauntedtie website",
      long_description=long_description,
      classifiers=[
          "Environment :: Web Environment",
          "Programming Language :: Python",
          "Programming Language :: Python :: 2.7",
          "Framework :: Plone",
          "Framework :: Plone :: 4.3",
      ],
      keywords='Affinitic',
      author='Affinitic',
      author_email='info@affinitic.be',
      url='https://github.com/affinitic/hauntedtie.skin',
      license='gpl',
      packages=find_packages(),
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'Plone',
          'plone.app.themingplugins',
          'Products.LinguaPlone',
      ])
