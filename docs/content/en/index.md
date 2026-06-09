---
seo:
  title: Alamo Studio — FiveM Script Documentation
  description: Official documentation for Alamo Studio FiveM scripts. Step-by-step guides to install, configure, and maintain your scripts so your server runs smoothly.
---

::u-page-hero
#title
Alamo Studio :br Script Documentation

#description
Everything you need to install, configure, and run your Alamo Studio FiveM scripts. :br Clear setup guides, full config references, and troubleshooting in one place.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /en/getting-started/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: i-simple-icons-discord
  size: xl
  to: https://discord.gg/alamostudio
  variant: outline
  ---
  Join our Discord
  :::


::u-page-section
#title
Get up and running in three steps

#description
Each Alamo Studio script follows the same simple flow. Pick where you are and jump straight to the guide.

  :::u-page-grid
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    to: /en/getting-started/installation
    ---
    #title
    [1. Install]{.text-primary}

    #description
    Download, drop the resource into your server, set dependencies, and add it to your `server.cfg`. Get the script loading correctly the first time.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    to: /en/alamo-market/configuration
    ---
    #title
    [2. Configure]{.text-primary}

    #description
    Tune the `config.lua` to match your framework, jobs, items, and prices. Every option is documented with examples and safe defaults.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    to: /en/alamo-market/troubleshooting
    ---
    #title
    [3. Maintain]{.text-primary}

    #description
    Keep scripts healthy with update guides, common error fixes, and performance tips so your server stays smooth under load.
    ::::
  :::
::

::u-page-section
#title
Built for QBox, QBCore & ESX

#description
Our scripts are framework-aware. Follow the guide that matches your server and you're ready in minutes.

  :::div{.mx-auto.grid.max-w-4xl.grid-cols-1.gap-8.lg:grid-cols-2}
    ::::u-page-card
    ---
    spotlight: true
    ---
      :::::div{.bg-elevated.rounded-lg.p-3.text-left.w-full.overflow-x-auto}
```lua [config.lua]
Config = {}

Config.Framework = 'qbox' -- 'qbox' | 'qbcore' | 'esx'
Config.Debug     = false

Config.Locations = {
    { coords = vec3(-254.1, -971.2, 31.2), label = 'Main Shop' },
}
```
      :::::

    #title
    Copy-paste [config examples]{.text-primary}

    #description
    Every configurable option comes with a working snippet. No guesswork.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    to: /en/alamo-market/troubleshooting
    ---
    #title
    Fast [troubleshooting]{.text-primary}

    #description
    Hitting an error? Our troubleshooting guide covers the most common issues, what causes them, and exactly how to fix them.

      :::::u-button
      ---
      class: px-0
      color: neutral
      to: /en/alamo-market/troubleshooting
      trailing-icon: i-lucide-arrow-right
      variant: link
      ---
      View troubleshooting guide
      :::::
    ::::
  :::
::
