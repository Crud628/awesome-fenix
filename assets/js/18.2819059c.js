(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{523:function(e,t,r){e.exports=r.p+"assets/img/reg.74c74dba.png"},524:function(e,t,r){e.exports=r.p+"assets/img/index.cee34ef7.png"},525:function(e,t,r){e.exports=r.p+"assets/img/build.fa96693d.png"},526:function(e,t,r){e.exports=r.p+"assets/img/debug.d4776a0b.png"},697:function(e,t,r){"use strict";r.r(t);var a=r(11),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"openjdk-with-clion懒人包"}},[e._v("OpenJDK with CLion懒人包")]),e._v(" "),a("p",[e._v("一组快速环境构建、编译、修改、裁剪、调试OpenJDK的懒人包。")]),e._v(" "),a("p",[e._v("本工程是笔者在"),a("a",{attrs:{href:"https://github.com/JetBrains/projector-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("JetBrains Projector"),a("OutboundLink")],1),e._v("项目基础上修改的headlessly集成开发环境。目标是客户端可以仅通过浏览器，实现在CLion图形化集成开发环境中进行OpenJDK的开发调试工作。JetBrains Projector提供了比直接使用X11 Forwarding、RDP或VNC更高效的远程图形性能，在本机环境或者局域网环境中使用时，能获得几乎与Native IDE相同的响应速度和操作体验。可以说此懒人包确是偷懒的方案，但并非玩具，能够作为VSC Remote之外，另一种本机编码远端编译运行的解决方案，实际应用于生产之中。")]),e._v(" "),a("h2",{attrs:{id:"使用方法"}},[e._v("使用方法")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("运行以下Docker镜像：")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run -it --rm -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("8887")]),e._v(":8887 icyfenix/openjdk-clion:latest\n")])])]),a("p",[e._v("此镜像支持Linux、Windows、WSL2、MacOS等宿主环境，不过编译结果于宿主环境无关，输出的都是Linux-Server-64 Bits的OpenJDK，如需调整，可参见“编译镜像”一节。\n出于OpenJDK编译本身"),a("a",{attrs:{href:"https://hg.openjdk.java.net/jdk/jdk/raw-file/tip/doc/building.html#build-hardware-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("资源需求"),a("OutboundLink")],1),e._v("，此容器要求可使用的资源至少应为2 Cores、4 GB RAM、6 GB Disk。")])]),e._v(" "),a("li",[a("p",[e._v("容器启动后，在浏览器中打开"),a("a",{attrs:{href:"http://localhost:8887",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8887"),a("OutboundLink")],1),e._v("，出现如下界面：")]),e._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:r(523),alt:""}})])]),e._v(" "),a("p",[e._v('CLion并没有像IDEA那样提供免费的社区版，所以这步买了JetBrains产品同学的填账号，没有买的就选择"Evaluate for free"试用30天。JetBrains IDE'),a("a",{attrs:{href:"https://github.com/JetBrains/projector-docker#license",target:"_blank",rel:"noopener noreferrer"}},[e._v("允许"),a("OutboundLink")],1),e._v("以Projector方式封装为Docker镜像去使用，但IDE本身是收费的，JetBrains对学生、开源作者都有免费授权，产品也极为优秀，希望你能支持正版。")])]),e._v(" "),a("li",[a("p",[e._v("进入主界面，选择Open，笔者在HOME目录下放了一份JDK15源码，此源码在镜像编译时已自动生成了Slow Debug配置项，并生成好了对应的"),a("a",{attrs:{href:"https://hg.openjdk.java.net/jdk/jdk/raw-file/tip/doc/ide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Compilation Database"),a("OutboundLink")],1),e._v("和CLion的工程配置，因此你可以直接在IDE中导入这个工程。")]),e._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:r(524),alt:"index"}})])])]),e._v(" "),a("li",[a("p",[e._v("打开工程，待IDE自动更新符号表、索引文件结束之后（视宿主机的性能不同，可能要几分钟时间），你即可以：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("阅读浏览OpenJDK源码。"),a("br"),e._v("CLion的各种代码导航、辅助功能可以帮助你更方便地了解工程结构。")])]),e._v(" "),a("li",[a("p",[e._v("修改OpenJDK源码并重编译。"),a("br"),e._v("通过Build菜单中的Build Project或Rebuild Project选项，可增量编译或全量编译源码。全量编译可能需要十分钟以上的时间，但增量编译一般较快，所以在Run/Debug Configurations中默认也会进行增量编译，如果你不希望这样做，可自行在Before Luanch菜单中移除。")]),e._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:r(525),alt:"build"}})])]),e._v(" "),a("p",[e._v("另再次强调笔者预置的编译配置项为Slow Debug，保留了符号表，禁用了大部分优化，这意味着它很适合调试，但不适合真正地应用于生产环境。如果你需要发布正式产品，请自行建立Release配置项，做法可参见“编译镜像”一节。。")])]),e._v(" "),a("li",[a("p",[e._v("跟踪调试HotSpot虚拟机。\n笔者预置提供了"),a("code",[e._v("java -version")]),e._v("和"),a("code",[e._v("java Helloworld")]),e._v("两个运行配置。如果你是刚刚开始接触OpenJDK源码，不妨在"),a("code",[e._v("~/jdk/java.base/share/native/libjli/java.c")]),e._v("的"),a("code",[e._v("JavaMain(void * _args)")]),e._v("方法上打个断点，由此开启你学习HotSpot内部实现的旅程。")]),e._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:r(526),alt:"debug"}})])]),e._v(" "),a("p",[e._v("在开始调试之前，你最好至少进行过一次编译，生成了二进制的可运行程序，否则将会在首次运行时自动进行全量编译。")])]),e._v(" "),a("li",[a("p",[e._v("调试自己的Java代码。\n笔者在"),a("code",[e._v("/playgrounds")]),e._v("中预置了一个Helloworld Class供测试之用，倘若你跟踪HotSpot的目的是想解决学习工作中预见的真实问题，那可以把你自己的Class或者Jar文件映射到容器中进行调试，譬如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker run -it --rm -p 8887:8887 -v JAVA-APP-PATH:/home/projector-user/playgrounds icyfenix/openjdk-clion:latest\n")])])])])])])]),e._v(" "),a("h2",{attrs:{id:"编译镜像"}},[e._v("编译镜像")]),e._v(" "),a("p",[e._v("本镜像是以Debian 10为基座，整合了JetBrains Projector Server、JetBrains Clion 2020.3、OpenJDK 15（作为Bootstrap JDK）二进制包，以及一份OpenJDK 15的源码，内容多，容量大，所以编译镜像必须具备良好的网络条件，尤其是科学上网。编译步骤倒是颇为简单，具体为：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("克隆本工程。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/fenixsoft/openjdk-for-dummies.git\n")])])]),a("p",[a("strong",[e._v("建议")]),e._v("：创建一个空目录，然后在该目录中克隆本工程。由于镜像编译时还会克隆Projector Server与OpenJDK项目，因此它的Docker Build Context是父目录而不是通常的当前目录。如果父目录中有其他内容，将会导致发送给Docker Daemon的内容变多，导致编译时间变长。")])]),e._v(" "),a("li",[a("p",[e._v("克隆Projector Server与OpenJDK。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./clone-core.sh\n")])])])]),e._v(" "),a("li",[a("p",[e._v("编译镜像。")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("./build-container.sh\n")])])])])]),e._v(" "),a("p",[e._v("镜像编译的过程是完全傻瓜式的，但是实际内容很多，时间也很长，不妨先浏览一下"),a("code",[e._v("Dockerfile")]),e._v("文件，看看镜像具体做了什么事情，有时候一些小的修改会提高很多的编译效率，譬如脚本中出于版本兼容性考虑，关闭了"),a("a",{attrs:{href:"https://docs.docker.com/develop/develop-images/build_enhancements/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker BuildKit"),a("OutboundLink")],1),e._v("，打开会使得重复编译的速度有很大提升。")]),e._v(" "),a("p",[e._v("你可能会基于以下目的，希望编译、定制一份新的镜像：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("希望将它作为正式的工作环境，想保存JetBrains账号、个人习惯配置等信息。笔者建议是你完成配置之后，采用"),a("code",[e._v("docker commit")]),e._v("命令来保存变更，无必要从头开始构建，这样会快捷许多。")])]),e._v(" "),a("li",[a("p",[e._v("希望变更内置的JDK源码的版本。JDK的源码是通过"),a("code",[e._v("clone-core.sh")]),e._v("文件下载的，可以通过修改此文件中JDK的GitHub地址来切换不同的版本，如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/openjdk/jdk15.git ../jdk-source\n")])])])]),e._v(" "),a("li",[a("p",[e._v("希望采用不同的编译配置，譬如编译32 Bits版本，譬如交叉编译出其他系统的JDK版本、譬如建立Fast Debug、Release等其他编译配置项等。这些信息定义在"),a("code",[e._v("Dockerfile")]),e._v("的"),a("code",[e._v("configure")]),e._v("中，你可以调整此行的参数来实现：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./configure --with-boot-jdk=/usr/lib/jvm/openjdk-15-jdk --with-debug-level=slowdebug --disable-warnings-as-errors --build=x86_64-unknown-linux-gnu --host=x86_64-unknown-linux-gnu --with-version-opt=icyfenix.cn\n")])])])]),e._v(" "),a("li",[a("p",[e._v("希望切换IDE版本、加入其他辅助软件或者IDE Plugins。CLion IDE的下载地址"),a("code",[e._v("build-container.sh")]),e._v("之中，你可以在"),a("a",{attrs:{href:"https://github.com/JetBrains/projector-installer/blob/master/projector_installer/compatible_ide.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),a("OutboundLink")],1),e._v("找到其他兼容的IDE列表，更换其中的下载地址即可。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("downloadUrl=${2:-https://download.jetbrains.com/cpp/CLion-2020.3.2.tar.gz}\n")])])]),a("p",[e._v("IDE也可以直接在市场中安装Plugins，但想支持独立于IDE的其他软件（譬如中文输入法）则有较大困难。由于Projector本质上是一种AWT的实现，因此只可能支持Swing应用以headlessly形式运行，在获得良好交互性能的同时，也决定了它不太可能像RDP、VNC那样实现与应用无关的全面兼容性。")])])]),e._v(" "),a("h2",{attrs:{id:"其他"}},[e._v("其他")]),e._v(" "),a("ul",[a("li",[e._v("如果打算使用此镜像用作实际工作环境，建议采用JetBrains专门提供的PWA外壳（"),a("a",{attrs:{href:"https://github.com/JetBrains/projector-client/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Projector Luancher"),a("OutboundLink")],1),e._v("）来代替Chrome、Safari浏览器。否则在浏览器中写代码总会遇到一些冲突问题，譬如查找代码"),a("code",[e._v("Ctrl+F")]),e._v("却弹出了浏览器的搜索框等。")]),e._v(" "),a("li",[e._v("如果你打算以iPad作为编码客户端，那服务器就不能使用SSL（仅能用HTTP，不能用HTTPS），因为iPad不支持Self-Signed WebSockets。")]),e._v(" "),a("li",[e._v("如果响应好的话，后续笔者可能会再做一些别的复杂环境，譬如Kubernetes（应该会是K3S）配GoLand之类的源码IDE镜像。")]),e._v(" "),a("li",[e._v("镜像压缩后有2.08 GB，Keep Patient。"),a("span",{staticStyle:{color:"#EEE"}},[e._v("好吧，看到这里也很有耐心了，我开放了一个公众服务，不想下载的话可先体验："),a("a",{staticStyle:{color:"#EEE"},attrs:{href:"http://icyfenix.work:8887"}},[e._v("http://icyfenix.work:8887")]),e._v("，但不保证长期可用，且仅按编译JDK的最低要求分配的资源，速度堪忧。")])])]),e._v(" "),a("h2",{attrs:{id:"协议"}},[e._v("协议")]),e._v(" "),a("ul",[a("li",[e._v("本文档代码部分采用"),a("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache 2.0协议"),a("OutboundLink")],1),e._v("进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：\n"),a("ul",[a("li",[a("strong",[e._v("署名")]),e._v("：在原有代码和衍生代码中，保留原作者署名及代码来源信息。")]),e._v(" "),a("li",[a("strong",[e._v("保留许可证")]),e._v("：在原有代码和衍生代码中，保留Apache 2.0协议文件。")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);