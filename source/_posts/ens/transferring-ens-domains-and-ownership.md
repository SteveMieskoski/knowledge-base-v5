---
title: "Transferring ENS Domains and Ownership"
lang: en
date: 2018-06-01 00:05:00
tags:
- transferring
- domains
- ownership
- ens
categories:
- [ens]
primary_category: ens
primary_category_display_name: "ENS"
alias:
- ens/changing-ens-owner-or-transferring-ens-name.html
---

# __Transferring ENS Domains and Ownership__
###### ⏰ 3 min read
***

## __Transferring a Domain (Best Practice)__
**Step 1.** Search for your domain on Etherscan.io.

**Step 2.** Copy the 'Label Hash'.

**Step 3.** [Access your wallet]() and head to the Contracts page, then select ENS - Eth Registrar (Auction) `0x6090a6e47849629b7245dfa1ca21d94cd15878ef` from the dropdown menu.

**Step 4.** Optional, but recommended: set a lower gas price via our gas slider interface, to save on fees.

**Step 5.** Access and choose the 'transfer' call.

**Step 6.** Paste the 'LabelHash' from Etherscan.io into the '_hash' field.

**Step 7.** Paste the address of the new owner in the 'newOwner' field.

**Step 8.** Send the transaction.



## __Only Setting Owner__
#### __WARNING: If you only change the owner, the deed owner can get the name back.__

**Step 1.** Search for your domain on Etherscan.io.

**Step 2.** Copy the 'NameHash'.

**Step 3.** [Access your wallet]() and head to the Contracts area of our interface. Then, select 'ENS Registry' (`0x314159265dD8dbb310642f98f50C066173C1259b`) from the dropdown menu.

**Step 4.** Optional, but recommended: set a lower gas price via our gas slider interface, to save on fees.

**Step 5.** Access and choose the 'setOwner' call. Paste the 'NameHash' (not 'LabelHash') from Etherscan.io into the node field.

**Step 6.** Paste the address of the new owner in 'owner'.

**Step 7.** Send the transaction.