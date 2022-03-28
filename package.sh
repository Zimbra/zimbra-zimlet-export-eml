#!/bin/bash

npm install
zimlet build
zimlet package -v 0.0.1 --zimbraXVersion ">=2.0.0" -n "zimbra-zimlet-eml-export" --desc "Adds a button in the more menu to export an email to eml." -l "Export email as EML"
