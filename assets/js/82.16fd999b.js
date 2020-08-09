(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{622:function(e,t,a){"use strict";a.r(t);var r=a(26),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"3-wallet-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#3-wallet-setup"}},[e._v("#")]),e._v(" (3) Wallet Setup")]),e._v(" "),a("p",[e._v("After "),a("RouterLink",{attrs:{to:"/RegisterAccount/"}},[e._v("account registration")]),e._v(" and "),a("RouterLink",{attrs:{to:"/CreateStore/"}},[e._v("store creation")]),e._v(", it's time to configure a wallet in your BTCPay Server, so that you can start receiving payments into it.")],1),e._v(" "),a("p",[e._v("There are two ways to set up a wallet in BTCPay Server:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#use-an-existing-wallet"}},[e._v("Use an existing wallet")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#create-a-new-wallet"}},[e._v("Create a new wallet")])])]),e._v(" "),a("h2",{attrs:{id:"use-an-existing-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-an-existing-wallet"}},[e._v("#")]),e._v(" Use an existing wallet")]),e._v(" "),a("p",[e._v("Using an existing wallet assumes that you already have an external wallet created and backed up.")]),e._v(" "),a("p",[e._v("When using an existing wallet with BTCPay Server, you're providing an extended public key (xpub) from an externally generated wallet. Extended public key is a watch-only wallet token. Providing this public key allows BTCPay Server to generate a new address each time a new invoice is created.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("By using an existing wallet, you can receive payments to the external wallet, without BTCPay Server knowing the wallet's private key. If a malicious attacker hacked your server and obtained the xpub, they could observe your transaction history, but cannot access the funds.")])]),e._v(" "),a("p",[e._v("Externally generated wallet can be used as:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#use-an-existing-hardware-wallet"}},[e._v("Existing hardware wallet")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#use-an-existing-software-wallet"}},[e._v("Existing software wallet")])])]),e._v(" "),a("h3",{attrs:{id:"use-an-existing-hardware-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-an-existing-hardware-wallet"}},[e._v("#")]),e._v(" Use an existing hardware wallet")]),e._v(" "),a("p",[e._v("Hardware wallets provide a good balance between security and ease of use. If you already have a hardware wallet set up, you can easily use it with your BTCPay Server. Thanks to built-in "),a("RouterLink",{attrs:{to:"/Vault/"}},[e._v("hardware wallet integration")]),e._v(" the xpub key from the hardware wallet is automatically added to your BTCPay Server. The integration further allows you to spend funds received to your store within BTCPay's "),a("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("internal wallet")])],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you own a hardware wallet, follow the instructions on how to "),a("RouterLink",{attrs:{to:"/Vault/"}},[e._v("use a an existing hardware wallet with your BTCPay Server")])],1)]),e._v(" "),a("h3",{attrs:{id:"use-an-existing-software-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-an-existing-software-wallet"}},[e._v("#")]),e._v(" Use an existing software wallet")]),e._v(" "),a("p",[e._v("Using an existing software wallet assumes that you already have an external wallet created and backed up. In theory, any mobile/desktop wallet that provides an extended public key should work, however, most wallets have technical limitations "),a("RouterLink",{attrs:{to:"/FAQ/FAQ-Wallet/#missing-payments-in-my-software-or-hardware-wallet"}},[e._v("(gap-limit)")]),e._v(" that may cause serious user-experience problems for you later on.")],1),e._v(" "),a("p",[e._v("For that reason, we recommend that you only use software wallets listed below.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ElectrumWallet/"}},[e._v("Electrum Wallet")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/WasabiWallet/"}},[e._v("Wasabi Wallet")])],1)]),e._v(" "),a("p",[e._v("Click on the link above you will be redirected to a step by step tutorial on how to set up particular software wallet with BTCPay Server.")]),e._v(" "),a("p",[e._v("To spend and manage the funds received to your external software wallet, you can use an "),a("RouterLink",{attrs:{to:"/Wallet/"}},[e._v("internal BTCPay Wallet")]),e._v(" and sign a transaction with your private key or simply manage the funds in that external wallet itself.")],1),e._v(" "),a("h2",{attrs:{id:"create-a-new-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-wallet"}},[e._v("#")]),e._v(" Create a new wallet")]),e._v(" "),a("p",[e._v("If you do not have an existing wallet, you can generate it within your BTCPay Server. If are using a "),a("RouterLink",{attrs:{to:"/ThirdPartyHosting/"}},[e._v("third-party host")]),e._v(", this option needs to be explicitly enabled by the server admin. Generating a new wallet in an environment you are not sure is trustworthy, is discouraged.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("When a new wallet is generated, BTCPay Server will show you a twelve word recovery seed. After the initial display, the seed is wiped from the server, unless a "),a("RouterLink",{attrs:{to:"/HotWallet/"}},[e._v("hot wallet option")]),e._v(" is enabled.")],1),e._v(" "),a("p",[e._v("Anyone with access to your recovery seed can also access and steal all your funds. Securely back up your seed by writing it down and keep it in a safe place. Do not photograph it or store it in a digital format. Do not rely on your server for storing your private keys, even if you're using a hot wallet.")])]),e._v(" "),a("p",[e._v("Follow the "),a("RouterLink",{attrs:{to:"/CreateWallet/"}},[e._v("instructions here to learn how to generate a new wallet")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("There are many options on how set up a wallet with your BTCPay Server. It's up to you to decide what works best for your use-case. Once you configure a wallet, you're all set. The next step, is to "),a("RouterLink",{attrs:{to:"/WhatsNext/"}},[e._v("start exploring the features")]),e._v(".")],1),e._v(" "),a("p",[a("em",[a("strong",[e._v("Proceed to the next step - "),a("RouterLink",{attrs:{to:"/WhatsNext/"}},[e._v("What's Next?")]),e._v(".")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);