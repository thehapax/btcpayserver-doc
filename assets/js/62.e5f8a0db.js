(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{581:function(e,a,t){"use strict";t.r(a);var s=t(26),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"btcpay-synchronization-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-synchronization-issues"}},[e._v("#")]),e._v(" BTCPay Synchronization Issues")]),e._v(" "),t("p",[e._v("This document covers the most common questions and issues that may occur during BTCPay sync.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#why-does-btcpay-sync"}},[e._v("Why does BTCPay sync?")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#can-i-skip-the-synchronization"}},[e._v("Can I skip/speed up the sync?")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#how-do-i-know-that-btcpay-synced-completely"}},[e._v("How do I know that the sync is finished?")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#btcpay-server-takes-forever-to-synchronize"}},[e._v("BTCPay takes forever to synchronize")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#btcpay-server-keeps-showing-that-my-node-is-always-starting"}},[e._v("BTCPay Server keeps showing that my node is always starting")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#im-running-a-full-node-and-have-a-synched-blockchain-can-btcpay-use-it-so-that-it-doesnt-have-to-do-a-full-sync"}},[e._v("I already have a synced full node, can I use it with BTCPay?")])])]),e._v(" "),t("h2",{attrs:{id:"why-does-btcpay-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-does-btcpay-sync"}},[e._v("#")]),e._v(" Why does BTCPay sync?")]),e._v(" "),t("p",[e._v("After deployment, your BTCPay Server needs to sync the entire blockchain and validate all the consensus rules. Depending on your machine specifications, bandwidth and number of altcoins you added, this process may take between 1-5 days.")]),e._v(" "),t("p",[e._v("It may seem tedious, but it's a critical step of running your own full node and not having to trust or rely on anyone. Your node will not only download ~300GB of data (less if you're using a pruned node) but also validate all the rules of the consensus. You can find more information about the importance of blockchain synchronization in "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=OrYDehC-8TU",target:"_blank",rel:"noopener noreferrer"}},[e._v("this video"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"can-i-skip-the-synchronization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#can-i-skip-the-synchronization"}},[e._v("#")]),e._v(" Can I skip the synchronization?")]),e._v(" "),t("p",[e._v("You can't skip synchronization, but you can drastically decrease the time it takes. If you're comfortable with using the command line, you can use FastSync to synchronize your node faster. Be sure to "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/tree/master/contrib/FastSync",target:"_blank",rel:"noopener noreferrer"}},[e._v("read this FastSync document"),t("OutboundLink")],1),e._v(" to understand the potential trust issues involved with this feature.")]),e._v(" "),t("p",[e._v("To use FastSync, make sure your deployment has a pruning option enabled by using an "),t("code",[e._v("opt-save-storage")]),e._v(" "),t("RouterLink",{attrs:{to:"/FAQ/FAQ-Deployment/#how-can-i-modify-or-deactivate-environment-variables"}},[e._v("environment variable")]),e._v(", otherwise bitcoind will not be able to sync. First step is to "),t("RouterLink",{attrs:{to:"/FAQ/FAQ-ServerSettings/#how-to-ssh-into-my-btcpay-running-on-vps"}},[e._v("ssh into")]),e._v(" your BTCPayServer instance and run the following commands:")],1),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAY_BASE_DIRECTORY")]),e._v("/btcpayserver-docker/\nbtcpay-down.sh\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" contrib/FastSync\n./load-utxo-set.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Once FastSync has completed")]),e._v("\nbtcpay-up.sh\n")])])]),t("p",[e._v("After FastSync is complete and you have brought back up your instance, refresh your BTCPay domain and wait for remaining blockchain synchronization. You can also follow "),t("a",{attrs:{href:"https://youtube.com/watch?v=VNMnd-dX9Q8?t=1730",target:"_blank",rel:"noopener noreferrer"}},[e._v("this video"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("If your FastSync returns "),t("code",[e._v("You need to delete your Bitcoin Core wallet")]),e._v(" after you load the uxto set, or you find this error: "),t("code",[e._v("Last wallet synchronisation goes beyond pruned data")]),e._v(", see the cause of "),t("a",{attrs:{href:"#btcpay-server-keeps-showing-that-my-node-is-always-starting"}},[e._v("BTCPay Server keeps showing that my node is always starting")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"how-do-i-know-that-btcpay-synced-completely"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-know-that-btcpay-synced-completely"}},[e._v("#")]),e._v(" How do I know that BTCPay synced completely?")]),e._v(" "),t("p",[e._v("When you do not see a pop-up message in the bottom right corner, which shows the sync progress, that means that your server is fully synced and you can "),t("RouterLink",{attrs:{to:"/RegisterAccount/"}},[e._v("begin using it")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"btcpay-server-takes-forever-to-synchronize"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-takes-forever-to-synchronize"}},[e._v("#")]),e._v(" BTCPay Server takes forever to synchronize")]),e._v(" "),t("p",[e._v("Synchronizing a Full Bitcoin node should take between 1 and 5 days. It should sync quickly at first and more slowly at the end.")]),e._v(" "),t("p",[e._v("If the node appears to not be syncing, verify:")]),e._v(" "),t("ul",[t("li",[e._v("Not enough CPU")]),e._v(" "),t("li",[e._v("Using swap memory")])]),e._v(" "),t("h3",{attrs:{id:"cause-1-not-enough-cpu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cause-1-not-enough-cpu"}},[e._v("#")]),e._v(" Cause 1: Not enough CPU")]),e._v(" "),t("p",[e._v("We recommend 2 CPU while synchronizing; however some hosting providers throttle your CPU if you use too much.")]),e._v(" "),t("p",[e._v("Check with")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\ndocker stats\n")])])]),t("p",[e._v("If you see more than 100% CPU usage, while being very slow to sync:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("8e7ac41e6e2a        btcpayserver_bitcoind               100%               560.5MiB / 3.853GiB   14.20%              4.17\n")])])]),t("p",[e._v("Then you need to scale up your machine specification.")]),e._v(" "),t("p",[e._v("If you see very low CPU usage (less than 10%) during synchronization:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("8e7ac41e6e2a        btcpayserver_bitcoind               10%               560.5MiB / 3.853GiB   14.20%              4.17\n")])])]),t("p",[e._v("Your hosting provider might throttle your CPU. Please make sure your host supports the high use of CPU for an extended period.")]),e._v(" "),t("p",[e._v("If they don't allow it, shut down your server until they stop throttling you. Then you can limit the CPU via docker, and restart the server:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("docker update btcpayserver_bitcoind --cpus "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('".8"')]),e._v("\n")])])]),t("h3",{attrs:{id:"cause-2-using-swap-memory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cause-2-using-swap-memory"}},[e._v("#")]),e._v(" Cause 2: Using swap memory")]),e._v(" "),t("p",[e._v("If you are synching and don't have enough memory, your server may use swap memory to continue operating:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("df")]),e._v(" -h\n")])])]),t("p",[e._v("If you see swap memory usage:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("              total        used        "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v("      shared  buff/cache   available\nMem:           "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G        "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G        0M         66M        0G        0M\nSwap:          "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(".0G        200M      800M\n")])])]),t("p",[e._v("Then it means you need to scale up your server by adding more memory.")]),e._v(" "),t("h2",{attrs:{id:"btcpay-server-keeps-showing-that-my-node-is-always-starting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-server-keeps-showing-that-my-node-is-always-starting"}},[e._v("#")]),e._v(" BTCPay Server keeps showing that my node is always starting")]),e._v(" "),t("p",[e._v("Possible cause:")]),e._v(" "),t("ul",[t("li",[e._v("Your bitcoin data directory is corrupted")]),e._v(" "),t("li",[e._v("You do not have enough RAM")]),e._v(" "),t("li",[e._v("You do not have enough storage")]),e._v(" "),t("li",[e._v("Your last wallet synchronisation goes beyond pruned data")])]),e._v(" "),t("h3",{attrs:{id:"cause-1-your-bitcoin-data-directory-is-corrupted"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cause-1-your-bitcoin-data-directory-is-corrupted"}},[e._v("#")]),e._v(" Cause 1: Your bitcoin data directory is corrupted")]),e._v(" "),t("p",[e._v("Check the logs of your node:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\ndocker logs --tail "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" btcpayserver_bitcoind\n")])])]),t("p",[e._v("If you see:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Please restart with -reindex or -reindex-chainstate to recover.\n")])])]),t("p",[e._v("Then your bitcoin data directory has been corrupted. It may be physical damage or failure of the hard drive.\nTo reindex your node:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("btcpay-down.sh\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delete 'blocks' and 'chainstate' folders")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf /var/lib/docker/volumes/generated_bitcoin_datadir/_data/blocks\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -rf /var/lib/docker/volumes/generated_bitcoin_datadir/_data/chainstate\nbtcpay-up.sh\n")])])]),t("h3",{attrs:{id:"cause-2-you-do-not-have-enough-ram"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cause-2-you-do-not-have-enough-ram"}},[e._v("#")]),e._v(" Cause 2: You do not have enough RAM")]),e._v(" "),t("p",[e._v("Check your RAM:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v(" -h\n")])])]),t("p",[e._v("If you see that you have no "),t("code",[e._v("free")]),e._v(" or very little "),t("code",[e._v("available")]),e._v(" memory:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("              total        used        "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("free")]),e._v("      shared  buff/cache   available\nMem:           "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G        "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G        0M         66M        0G        0M\nSwap:            0B          0B          0B\n")])])]),t("p",[e._v("Then you need more memory. If you have already synched your node, you can add some swap memory. If you haven't, your server specs are too limited.")]),e._v(" "),t("p",[e._v("If you have already synched, you can add 2G of swap memory with:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("fallocate -l 2G /mnt/swapfile\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("600")]),e._v(" /mnt/swapfile\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkswap")]),e._v(" /mnt/swapfile\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("swapon")]),e._v(" /mnt/swapfile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/mnt/swapfile   none    swap    sw    0   0"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" /etc/fstab\n")])])]),t("h3",{attrs:{id:"cause-3-you-do-not-have-enough-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cause-3-you-do-not-have-enough-storage"}},[e._v("#")]),e._v(" Cause 3: You do not have enough storage")]),e._v(" "),t("p",[e._v("Check the storage of your machine:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("df")]),e._v(" -h\n")])])]),t("p",[e._v("If you see you don't have any storage left (/dev/sda1 in my case)")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Filesystem      Size  Used Avail Use% Mounted on\nudev            "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("% /dev\ntmpfs           395M   41M  354M  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),e._v("% /run\n/dev/sda1       125G  125G  0G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("% /\ntmpfs           "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("% /dev/shm\ntmpfs           "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(".0M     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v(".0M   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("% /run/lock\ntmpfs           "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G     "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(".0G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("% /sys/fs/cgroup\n/dev/sdb1       "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(".8G   18M  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("7")]),e._v(".4G   "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("% /mnt\n")])])]),t("p",[t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md#generated-docker-compose",target:"_blank",rel:"noopener noreferrer"}},[e._v("Choose the docker fragment"),t("OutboundLink")],1),e._v(" for the amount of storage you aim to keep.")]),e._v(" "),t("p",[e._v("Then "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md#how-i-can-prune-my-nodes",target:"_blank",rel:"noopener noreferrer"}},[e._v("prune your node"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"cause-4-your-last-wallet-synchronisation-goes-beyond-pruned-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cause-4-your-last-wallet-synchronisation-goes-beyond-pruned-data"}},[e._v("#")]),e._v(" Cause 4: Your last wallet synchronisation goes beyond pruned data")]),e._v(" "),t("p",[e._v("This can happen if you use FastSync or import an already synched blockchain. It means that the bitcoin core wallet needs to be removed because it was created before the utxoset, likely because BTCPay Server started without the utxoset at the first boot. To verify this case, "),t("RouterLink",{attrs:{to:"/Troubleshooting/#2-1-btcpay-logs"}},[e._v("check the bitcoind log")]),e._v(" for this:")],1),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("Error: Prune: last wallet synchronisation goes beyond pruned data. You need to -reindex "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("download the whole blockchain again "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("case")]),e._v(" of pruned node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("If you see this error and agree to remove the wallet to finish syncing, use "),t("code",[e._v("docker volume rm generated_bitcoin_wallet_datadir")]),e._v(" after you run "),t("code",[e._v("btcpay-down.sh")]),e._v(" and before you run "),t("code",[e._v("btcpay-up.sh")]),e._v("\nWARNING: Do not delete this wallet if you have any funds on it.")]),e._v(" "),t("h2",{attrs:{id:"im-running-a-full-node-and-have-a-synched-blockchain-can-btcpay-use-it-so-that-it-doesnt-have-to-do-a-full-sync"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#im-running-a-full-node-and-have-a-synched-blockchain-can-btcpay-use-it-so-that-it-doesnt-have-to-do-a-full-sync"}},[e._v("#")]),e._v(" I'm running a full node and have a synched blockchain, can BTCPay use it so that it doesn't have to do a full sync?")]),e._v(" "),t("p",[e._v("Yes you can!  However, before you do that, you'll want to stop bitcoind from updating docker's volume for it, as that job will be taken over by BTCPay Server.")]),e._v(" "),t("p",[e._v("If you want to run BTCPay Server inside a docker-compose, and that you have the data directory ("),t("code",[e._v(".bitcoin")]),e._v(") of a fully synched node on your docker host, then you can reuse it easily for BTCPay Server.")]),e._v(" "),t("p",[e._v("To do that, follow the following steps :")]),e._v(" "),t("ul",[t("li",[e._v("Do the normal setup according to "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("this instruction"),t("OutboundLink")],1),e._v(". Note the "),t("code",[e._v("opt-save-storage")]),e._v(" environment variable, which is used to enable various pruning levels. If you do not want to prune your exiting data directory, then omit the following line in your BTCPay docker deployment: "),t("code",[e._v('export BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-save-storage-s"')]),e._v(".")]),e._v(" "),t("li",[e._v("Once "),t("code",[e._v("btcpay-setup.sh")]),e._v(" is over, turn down the docker compose with "),t("code",[e._v("btcpay-down.sh")]),e._v(".")]),e._v(" "),t("li",[e._v("Login as root with "),t("code",[e._v("sudo su -")]),e._v(".")]),e._v(" "),t("li",[e._v("Open the docker's volume for bitcoind : "),t("code",[e._v("cd /var/lib/docker/volumes/generated_bitcoin_datadir/")]),e._v(", and check its content with "),t("code",[e._v("ls -la")]),e._v(". You should see only one directory named "),t("code",[e._v("_data")]),e._v(".")]),e._v(" "),t("li",[e._v("Now remove the "),t("code",[e._v("_data")]),e._v("directory : "),t("code",[e._v("rm -r _data")]),e._v(". If for any reason you want to keep this directory and its content you can also rename it instead : "),t("code",[e._v("mv _data/ _data.old/")])]),e._v(" "),t("li",[e._v("Now create a "),t("a",{attrs:{href:"https://www.cyberciti.biz/faq/creating-soft-link-or-symbolic-link/",target:"_blank",rel:"noopener noreferrer"}},[e._v("symbolic link"),t("OutboundLink")],1),e._v(" between "),t("code",[e._v("/var/lib/docker/volumes/generated_bitcoin_datadir/_data")]),e._v(" and your data directory ("),t("code",[e._v(".bitcoin")]),e._v(") on your host: "),t("code",[e._v("ln -s path/to/.bitcoin /var/lib/docker/volumes/generated_bitcoin_datadir/_data")])]),e._v(" "),t("li",[e._v("Check that the link has been done with a "),t("code",[e._v("ls -la")])]),e._v(" "),t("li",[e._v("Start your docker-compose again with "),t("code",[e._v("btcpay-up.sh")])])]),e._v(" "),t("p",[e._v("Your BTCPay Server should now be fully synched.")]),e._v(" "),t("p",[e._v("If after this BTCPay Server keeps showing that your node is always starting, see the cause of "),t("a",{attrs:{href:"#btcpay-server-keeps-showing-that-my-node-is-always-starting"}},[e._v("BTCPay Server keeps showing that my node is always starting")]),e._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);