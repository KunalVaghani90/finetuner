Search.setIndex({docnames:["api/finetuner","api/finetuner.fit","api/finetuner.helper","api/finetuner.labeler","api/finetuner.labeler.executor","api/finetuner.labeler.fit","api/finetuner.tailor","api/finetuner.tailor.base","api/finetuner.tailor.helper","api/finetuner.tailor.keras","api/finetuner.tailor.paddle","api/finetuner.tailor.pytorch","api/finetuner.toydata","api/finetuner.tuner","api/finetuner.tuner.base","api/finetuner.tuner.dataset","api/finetuner.tuner.dataset.helper","api/finetuner.tuner.fit","api/finetuner.tuner.keras","api/finetuner.tuner.keras.datasets","api/finetuner.tuner.keras.head_layers","api/finetuner.tuner.paddle","api/finetuner.tuner.paddle.datasets","api/finetuner.tuner.paddle.head_layers","api/finetuner.tuner.pytorch","api/finetuner.tuner.pytorch.datasets","api/finetuner.tuner.pytorch.head_layers","api/modules","basics/data-format","basics/glossary","basics/index","basics/labeler","basics/tailor","basics/tuner","design/design-decisions","design/design-philo","design/index","design/overview","get-started/covid-qa","get-started/fashion-mnist","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/finetuner.rst","api/finetuner.fit.rst","api/finetuner.helper.rst","api/finetuner.labeler.rst","api/finetuner.labeler.executor.rst","api/finetuner.labeler.fit.rst","api/finetuner.tailor.rst","api/finetuner.tailor.base.rst","api/finetuner.tailor.helper.rst","api/finetuner.tailor.keras.rst","api/finetuner.tailor.paddle.rst","api/finetuner.tailor.pytorch.rst","api/finetuner.toydata.rst","api/finetuner.tuner.rst","api/finetuner.tuner.base.rst","api/finetuner.tuner.dataset.rst","api/finetuner.tuner.dataset.helper.rst","api/finetuner.tuner.fit.rst","api/finetuner.tuner.keras.rst","api/finetuner.tuner.keras.datasets.rst","api/finetuner.tuner.keras.head_layers.rst","api/finetuner.tuner.paddle.rst","api/finetuner.tuner.paddle.datasets.rst","api/finetuner.tuner.paddle.head_layers.rst","api/finetuner.tuner.pytorch.rst","api/finetuner.tuner.pytorch.datasets.rst","api/finetuner.tuner.pytorch.head_layers.rst","api/modules.rst","basics/data-format.md","basics/glossary.md","basics/index.md","basics/labeler.md","basics/tailor.md","basics/tuner.md","design/design-decisions.md","design/design-philo.md","design/index.md","design/overview.md","get-started/covid-qa.md","get-started/fashion-mnist.md","index.md"],objects:{"":{finetuner:[0,0,0,"-"]},"finetuner.fit":{fit:[1,1,1,""]},"finetuner.helper":{AnyDNN:[2,2,1,""],AnyDataLoader:[2,2,1,""],get_framework:[2,1,1,""]},"finetuner.labeler":{executor:[4,0,0,"-"],fit:[5,0,0,"-"]},"finetuner.labeler.executor":{DataIterator:[4,3,1,""],FTExecutor:[4,3,1,""]},"finetuner.labeler.executor.DataIterator":{add_fit_data:[4,4,1,""],requests:[4,5,1,""],store_data:[4,4,1,""],take_batch:[4,4,1,""]},"finetuner.labeler.executor.FTExecutor":{embed:[4,4,1,""],fit:[4,4,1,""],get_embed_model:[4,4,1,""],requests:[4,5,1,""]},"finetuner.labeler.fit":{fit:[5,1,1,""]},"finetuner.tailor":{base:[7,0,0,"-"],helper:[8,0,0,"-"],keras:[9,0,0,"-"],paddle:[10,0,0,"-"],pytorch:[11,0,0,"-"]},"finetuner.tailor.base":{BaseTailor:[7,3,1,""]},"finetuner.tailor.base.BaseTailor":{candidate_layers:[7,6,1,""],model:[7,6,1,""]},"finetuner.tailor.keras":{KerasTailor:[9,3,1,""]},"finetuner.tailor.keras.KerasTailor":{candidate_layers:[9,6,1,""]},"finetuner.tailor.paddle":{PaddleTailor:[10,3,1,""]},"finetuner.tailor.paddle.PaddleTailor":{candidate_layers:[10,6,1,""]},"finetuner.tailor.pytorch":{PytorchTailor:[11,3,1,""]},"finetuner.tailor.pytorch.PytorchTailor":{candidate_layers:[11,6,1,""]},"finetuner.toydata":{generate_fashion_match:[12,1,1,""],generate_qa_match:[12,1,1,""]},"finetuner.tuner":{base:[14,0,0,"-"],dataset:[15,0,0,"-"],fit:[17,0,0,"-"],keras:[18,0,0,"-"],paddle:[21,0,0,"-"],pytorch:[24,0,0,"-"]},"finetuner.tuner.base":{BaseArityModel:[14,3,1,""],BaseDataset:[14,3,1,""],BaseHead:[14,3,1,""],BaseTuner:[14,3,1,""]},"finetuner.tuner.base.BaseArityModel":{forward:[14,4,1,""]},"finetuner.tuner.base.BaseHead":{arity:[14,5,1,""],forward:[14,4,1,""],get_output:[14,4,1,""],loss_fn:[14,4,1,""],metric_fn:[14,4,1,""]},"finetuner.tuner.base.BaseTuner":{arity:[14,6,1,""],embed_model:[14,6,1,""],fit:[14,4,1,""],head_layer:[14,6,1,""],save:[14,4,1,""],wrapped_model:[14,6,1,""]},"finetuner.tuner.dataset":{SiameseMixin:[15,3,1,""],TripletMixin:[15,3,1,""],helper:[16,0,0,"-"]},"finetuner.tuner.dataset.helper":{get_dataset:[16,1,1,""]},"finetuner.tuner.fit":{fit:[17,1,1,""]},"finetuner.tuner.keras":{KerasTuner:[18,3,1,""],datasets:[19,0,0,"-"],head_layers:[20,0,0,"-"]},"finetuner.tuner.keras.KerasTuner":{fit:[18,4,1,""],head_layer:[18,6,1,""],save:[18,4,1,""],wrapped_model:[18,5,1,""]},"finetuner.tuner.keras.datasets":{SiameseDataset:[19,3,1,""],TripletDataset:[19,3,1,""]},"finetuner.tuner.keras.head_layers":{CosineLayer:[20,3,1,""],HeadLayer:[20,3,1,""],TripletLayer:[20,3,1,""]},"finetuner.tuner.keras.head_layers.CosineLayer":{arity:[20,5,1,""],get_output:[20,4,1,""],loss_fn:[20,4,1,""],metric_fn:[20,4,1,""]},"finetuner.tuner.keras.head_layers.HeadLayer":{arity:[20,5,1,""],call:[20,4,1,""]},"finetuner.tuner.keras.head_layers.TripletLayer":{arity:[20,5,1,""],get_output:[20,4,1,""],loss_fn:[20,4,1,""],metric_fn:[20,4,1,""]},"finetuner.tuner.paddle":{PaddleTuner:[21,3,1,""],datasets:[22,0,0,"-"],head_layers:[23,0,0,"-"]},"finetuner.tuner.paddle.PaddleTuner":{fit:[21,4,1,""],head_layer:[21,6,1,""],save:[21,4,1,""],wrapped_model:[21,6,1,""]},"finetuner.tuner.paddle.datasets":{SiameseDataset:[22,3,1,""],TripletDataset:[22,3,1,""]},"finetuner.tuner.paddle.head_layers":{CosineLayer:[23,3,1,""],TripletLayer:[23,3,1,""]},"finetuner.tuner.paddle.head_layers.CosineLayer":{arity:[23,5,1,""],get_output:[23,4,1,""],loss_fn:[23,4,1,""],metric_fn:[23,4,1,""]},"finetuner.tuner.paddle.head_layers.TripletLayer":{arity:[23,5,1,""],get_output:[23,4,1,""],loss_fn:[23,4,1,""],metric_fn:[23,4,1,""]},"finetuner.tuner.pytorch":{PytorchTuner:[24,3,1,""],datasets:[25,0,0,"-"],head_layers:[26,0,0,"-"]},"finetuner.tuner.pytorch.PytorchTuner":{fit:[24,4,1,""],head_layer:[24,6,1,""],save:[24,4,1,""],wrapped_model:[24,5,1,""]},"finetuner.tuner.pytorch.datasets":{SiameseDataset:[25,3,1,""],TripletDataset:[25,3,1,""]},"finetuner.tuner.pytorch.head_layers":{CosineLayer:[26,3,1,""],TripletLayer:[26,3,1,""]},"finetuner.tuner.pytorch.head_layers.CosineLayer":{arity:[26,5,1,""],get_output:[26,4,1,""],loss_fn:[26,4,1,""],metric_fn:[26,4,1,""]},"finetuner.tuner.pytorch.head_layers.TripletLayer":{arity:[26,5,1,""],get_output:[26,4,1,""],loss_fn:[26,4,1,""],metric_fn:[26,4,1,""]},finetuner:{fit:[1,0,0,"-"],helper:[2,0,0,"-"],labeler:[3,0,0,"-"],tailor:[6,0,0,"-"],toydata:[12,0,0,"-"],tuner:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","data","Python data"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:function","2":"py:data","3":"py:class","4":"py:method","5":"py:attribute","6":"py:property"},terms:{"0":[12,20,23,26,28,39,40],"00":39,"000":28,"00010502179":28,"002585097":28,"011804931":28,"028714137":28,"0e7ec5aa":28,"0e7ec7c6":28,"0e7ecd52":28,"0e7ece7":28,"1":[7,9,10,11,12,20,23,26,33,34,38,39],"10":[1,14,17,18,21,24,28,33],"100":[12,38],"109":39,"11ec":[28,38,39],"128":[33,34,39,40],"132":39,"135":39,"141":39,"172":39,"18":39,"19":39,"1bab":39,"1bae":38,"1e008a366d49":[28,38,39],"1f9f":28,"1faa":28,"2":[12,14,20,23,26,28,33,38,39,40],"2021":34,"22900":39,"231":39,"256":[1,14,17,18,21,24],"28":[33,39,40],"28x28":28,"3":[12,14,20,23,26,28,34,39,40],"31":39,"32":[33,38,39,40],"33":39,"3d":35,"4":28,"481":[12,28],"49":39,"5":[28,33],"5000":[33,38],"52621":39,"56":[12,39],"5716974480":39,"5794172560":38,"6":28,"60":28,"60000":12,"64":[33,38],"65":39,"67":39,"67432a92":28,"67432cd6":28,"7":[39,40],"70":35,"784x128x32":33,"9":39,"94":39,"99":35,"9a49":28,"abstract":[4,7,14],"case":35,"class":[4,7,9,10,11,14,15,18,19,20,21,22,23,24,25,26,28,33,38,39],"default":[33,34],"do":[14,18,21,24,28,34,35,37],"final":[35,38,39],"float":28,"function":[4,28],"import":[28,33,34,35,37,38,39,40],"int":[1,12,14],"new":[33,34,35],"public":[34,35,37,39],"return":[1,2,5,7,9,10,11,12,14,17,18,21,24,33,38],"true":[1,12,28,33,34,38,39,40],"try":34,A:[14,21,29],And:35,As:34,At:34,But:[28,34],By:[33,34,37],For:[12,14,28,29,34],If:[12,28,35,38],In:[28,33,34,35,38,39,40],It:[12,28,33,34,35,37,38,40],On:34,One:[12,33],Or:35,That:[34,35],The:[7,12,14,18,24,28,34,35,38,39,40],Then:[28,35],There:[34,35],To:[28,34,37],With:35,_:[33,38],a207:39,a46a:28,a5dd3158:28,a5dd3784:28,a5dd3b94:28,a5dd3d74:28,aaaaaaaa:28,aaaaaaaaaaaaaa:39,aaaaaaaaaaaaaaaa:38,aaaaaaaaekaaaaaaaaawqaaaaaaaabpa:28,abc:[7,14],about:[28,34,35,37],ac8a:28,accept:[28,33,38,39],access:39,accompani:40,accord:[33,34],accuraci:[35,39],across:34,activ:[33,34,37,39,40],actual:34,ad:35,add:28,add_fit_data:4,addit:4,address:39,adjac:28,adopt:34,advanc:28,affect:[34,35],after:[28,34,35,37,38,39],ag:35,again:35,agnost:34,ai:[34,35,37,40],aim:[34,37],alia:2,all:[7,9,10,11,12,14,21,34],allow:[14,18,21,24,28,34,35,37,40],alreadi:34,also:[33,34,35,38],alwai:[4,28],among:35,an:[14,21,29,33,34,35,37,40],anchor:[20,23,26],ani:[1,2,7,9,10,11,17,29,34,35,37,38,39,40],annot:34,answer:[28,35,38],anydataload:2,anydnn:[1,2,7,14],anymor:35,anyon:[35,37],anyth:28,api:[35,37],app:[35,37,40],append:28,appli:35,applic:[35,40],aqaaaaaaaaacaaaaaaaaaamaaaaaaaaa:28,ar:[4,14,18,21,24,28,34,35,38,39,40],ara:4,arbitari:34,arbitrari:34,architectur:34,arg:[7,9,10,11,14,18,20,21,24],argu:37,argument:[4,33],ariti:[14,16,20,21,23,26],arity_model:[14,20,23,26],around:35,arrai:[28,38,39],articl:35,arxiv:35,attract:35,auf:28,auto:4,auxiliari:[14,18,21,24],avail:39,avoid:4,awar:35,axi:12,b32d:38,b9557788:39,b:[12,28,29,34],baaaaaaaaaafaaaaaaaaaayaaaaaaaaa:28,back:34,backend:[37,39,40],bad:28,baidu:34,bar:38,base64:39,base:[0,4,6,9,10,11,13,15,18,19,20,21,22,23,24,25,26,38,39],basearitymodel:14,basedataset:[14,19,22,25],baseexecutor:4,basehead:[14,20,21,23,24,26],basetailor:[7,9,10,11],basetun:[14,18,21,24],batch:[29,33,34],batch_first:[33,38],batch_siz:[1,14,17,18,21,24,33],beautifulli:34,becam:35,becaus:28,becom:35,been:38,befor:[35,39],behav:37,behavior:34,behind:34,being:35,believ:35,beliv:35,below:[28,33,34,35,37],bert:35,best:34,better:[14,18,21,24,34,35,37,38,39,40],between:28,bidirect:38,big:34,bigger:12,bit:35,blank:35,blob:[28,38,39],block:35,blog:34,bonjour:28,bool:[1,12],bottleneck:34,brows:35,buffer:[28,38,39],build:[28,33,34,35],built:[28,35],button:35,c:12,cach:[18,24],call:[14,18,20,21,24,28,33,34],callabl:1,cambridg:35,can:[7,9,10,11,12,28,33,34,35,37,38,39,40],candid:[7,9,10,11],candidate_lay:[7,9,10,11],carefulli:34,chain:[34,35],chanc:35,chang:[14,18,21,24,35],channel:[12,28],channel_axi:12,chapter:[28,35,37],chatbot:38,china:34,chosen:34,clarifi:34,classic:35,classif:[29,34],clear_labels_on_start:[1,4,5],click:35,cloud:35,code:[34,38],codebas:28,colleagu:34,collect:[34,35,37],color:35,column:28,com:40,combin:28,come:[28,34],comfort:37,common:[34,35],commun:34,compani:35,compat:34,compli:34,complic:35,compon:[29,33,34,37],compos:37,comput:28,concept:34,conduct:[34,37],config:[4,14,18,21,24],consecut:[14,18,21,24],consid:[28,34],consist:[34,37],construct:[28,33],contain:[28,29],content:[27,28,29,34,35,37,38],context:28,continu:35,contrari:34,converg:[38,39],convert:[28,29,34,38,39],copi:[14,39],core:[35,37],correctli:35,correspond:14,cosin:[4,28],cosinelay:[1,4,5,17,20,23,26,33],cost:35,could:34,covid19:38,covidqa:38,cpp:39,creat:35,critic:35,csrc:39,csv:28,current:35,cut:34,d8aaaaaaaaeqaaaaaaaaaxa:28,d:[28,29,34],da1:28,da2:28,dai:35,dam_path:4,data:[2,12,14,18,21,24,25,29,33,34,37,40],dataiter:4,dataset:[0,13,18,21,24,28,38,39],dc315d50:38,debug:28,decis:[35,37],decompress:35,decor:[18,24],decoupl:35,deep:[2,28,34,35,37,40],def:[33,38],defacto:35,definit:34,deliv:[34,35,40],deliveri:[34,37],demo:28,dens:[7,9,10,11,28,33,38,39,40],depend:34,descript:33,design:[35,37],despit:34,detect:[29,34],determin:34,develop:[34,35,37],dict:[1,4,7,9,10,11,14,17],dictionari:[7,9,10,11],differ:[14,18,21,24,28,34],dim:[33,38,39,40],dimens:29,dimension:38,direct:[33,38],directli:[28,34],dive:40,diversifi:34,dnn:[7,29,34,35],doc:[4,39],doctor:38,document:[12,28,29,33,34,38,39],documentarrai:[28,29,34,38,39],documentarraymemap:28,documentarraymemmap:[28,34,38,39],documentsequ:1,doe:[12,34,39],domain:35,don:35,done:[34,35,39],download:35,downstream:34,dtype:[28,38,39],dure:4,e:[12,28,34],each:[12,28,29,33,34],earlier:35,easi:35,easili:37,ecosystem:[34,35,37],edg:35,effect:35,effort:34,either:[28,33],emb:4,embed:[7,9,10,11,28,29,33,34,35,37,40],embed_model:[1,2,5,14,17,18,21,24,33,34,38,39,40],embedding_dim:[33,38],end:34,endli:34,endpoint:4,engin:35,enjoi:37,enlarg:34,enough:35,entrypoint:34,enviro:35,epoch:[1,14,17,18,21,24,33],equal:34,est:34,establish:35,eval_data:[1,14,17,18,21,24,33],evalu:[28,33],everi:[28,33,35,38,39],everyth:35,exactli:34,exampl:[12,14,29,34,38,39,40],exchang:34,executor:[0,3,35,39],exist:[33,34,35],expect:[4,12,35],experi:34,explain:35,expos:[34,35],exposur:34,express:28,extend:28,exteremli:35,extra:4,extrem:[34,35],f4:39,f8:28,factor:12,fail:4,fals:[1,4,5,7,9,10,11,12,28],familiar:35,fashion:[12,39,40],featur:35,feed:[4,28,33,38,39,40],feedback:[28,35,38,39],feel:[34,37],fetch:35,few:34,fewer:35,field:4,file:35,fill:[4,28,29,34,35,38],finetun:[28,29,33,34,37],first:[34,35,38,39],fit:[0,3,4,13,14,18,21,24,27,28,29,34,37,38,39,40],fix:[12,28,34],flatten:[33,39,40],flexibl:34,float32:[10,11],flow:[34,39],fly:[28,34],follow:[28,33,34,35,38,39,40],form:34,format:[33,34,38,39],forward:[14,33,38],found:35,four:28,framework:[34,38,39,40],freez:[7,9,10,11],freeze_lay:34,from:[4,7,9,10,11,28,33,34,35,37,38,39,40],frontend:[28,40],ft:[34,37],ftexecutor:4,full:35,fulli:34,funnel:34,fuse:[14,21],g:12,gap:34,gener:[12,28,29,33,34,35,37,38,39],general_model:34,generate_fashion_match:[12,28,33,39,40],generate_qa_match:[12,28,33,38],get:[7,9,10,11,12,14,18,21,24,34,35,38,39,40],get_dataset:16,get_embed_model:4,get_framework:2,get_output:[14,20,23,26],git:40,github:40,give:[12,34,37],given:[7,9,10,11,29,33,34,39],global:35,good:[28,34,35],goodby:28,googl:35,grai:12,grammar:35,graph:28,grayscal:[12,28],groundtruth:28,h236cf4:28,h:12,ha:[28,34,37],had:35,hallo:28,hand:35,handl:34,hanxiao:39,happen:34,have:[12,34,35,38,40],head:[14,18,21,24],head_lay:[1,4,5,13,14,17,18,21,24,33],headlay:[18,20],heavi:35,hello:[28,38,39],helper:[0,1,6,7,13,14,15,27],henc:[28,34],here:[28,33,34,35,37],hf:35,high:[34,35,37],highlight:35,hopefulli:[38,39],how:[28,34,35,37,40],howev:[28,35],http:[39,40],hub:35,huggingfac:[34,35],human:[34,35],i8:[28,38],i:[28,34,35,37,39],id:[28,38,39],idea:35,illustr:28,imag:[12,28,29,33,34],imaga:12,implement:[2,33,34],impli:37,improv:[28,35,38,39,40],in_featur:[33,38,39,40],includ:28,incorp:35,independ:[34,35],index:40,influr:35,info:[7,9,10,11,28],initi:34,inject:4,input:[14,19,22,25,28,29,34],input_dim:[33,38],input_dtyp:[10,11],input_s:[10,11],input_shap:[33,39,40],insid:[34,35,37],inspir:34,instal:40,instanc:28,integ:12,interact:[1,28,34,37,40],interest:34,interfac:[34,35],intern:39,introduc:28,invok:34,io:22,irrelev:34,is_testset:[12,33],item:28,its:[28,34,35,39],ivborw0k:39,jina:[4,28,35,37,38,39,40],job:34,just:35,k:[35,38,39],keep:35,kei:33,kera:[0,6,13,33,34,37,38,39,40],kerastailor:9,kerastun:18,keyboard:[38,39],keyword:4,knowledg:35,kwarg:[4,7,9,10,11,14,18,20,21,24,33,34],label:[0,12,14,18,21,24,27,29,33,37,40],labeled_dam_path:4,lambda:33,landscap:[34,35,37],languag:28,last:[34,37,40],lastcel:[33,38],later:[34,35,37],latest:34,layer:[7,9,10,11,14,18,20,21,24,33,34,38,39,40],layer_idx:[7,9,10,11],learn:[28,34,37,40],least:28,left:38,length:[12,28],less:[34,35],let:[34,35,38,39,40],level:[34,35,37],leverag:[34,35],like:[28,29],linear:[33,38,39,40],linux:40,list:[7,9,10,11],liter:35,load:35,loader:2,local:39,localhost:39,logic:28,look:[34,35,37,38,39],loss:39,loss_fn:[14,20,23,26],lvalu:[20,23,26],m1:28,m2:28,m3:28,m:28,machin:35,maco:40,made:28,mai:[34,35,37,39],main:40,maintain:34,major:34,make:[34,35,39,40],manag:34,mandatori:34,mani:35,manner:37,manual:28,map:4,margin:[20,23,26],match:[12,29,33],max_seq_len:12,maxim:34,maximum:12,me:[34,35],mean:[28,34,38,39],meant:[34,35,37],mention:35,mesh:35,meta:4,metric:4,metric_fn:[14,20,23,26],micro:34,microsoft:35,mile:[34,37,40],mime_typ:28,minor:34,minut:35,mission:35,mlp:[38,40],mnist:[12,39,40],model:[7,9,10,11,14,18,21,24,28,29,33,34,35,37,40],modul:[27,33,38,40],mond:28,monet:35,more:[28,34,40],most:[34,35,37],mostli:34,motiv:35,mous:[35,38,39],movi:34,multi:14,multipl:[14,18,21,24],multipli:35,must:[12,34,37],my:[34,35,37],myself:35,n:35,nativ:35,natuar:35,ndarrai:[12,28,29,34],nearest:28,need:[14,18,21,24,28,34,35],neg:[12,20,23,26,28,33,40],neg_valu:12,neighbour:28,network:[2,14,28,34,37,39,40],neural:[2,28,34,35,37,40],next:[4,29,34,35],nich:35,nn:[21,23,26,33,38,39,40],non:39,none:[1,4,5,12,14,17,18,20,21,23,24,26],note:[14,18,21,24,28,38,39],noth:[34,35],nov:34,now:[28,35,38,39,40],nowher:35,np:28,num_embed:[33,38],num_neg:[12,33,40],num_po:[12,33,40],num_tot:12,number:[12,28,33],numpi:[28,39],object:[2,14,15,18,21,24,28,29,34,38,39],observ:34,obviou:35,often:[28,34,35],okayish:35,one:[14,18,21,24,28,33,34,35,37,40],onli:[28,34,35],oper:34,option:[1,12,34],organ:28,origin:28,other:[28,34,35],otherwis:28,our:[34,35,38,39],out:[33,35,38],out_featur:[33,38,39,40],output:[29,34],output_dim:[33,34,38],own:28,packag:27,pad:38,paddl:[0,6,13,33,34,37,38,39,40],paddlepaddl:40,paddletailor:10,paddletun:21,page:35,paper:35,paragraph:[34,35,37],param:4,paramet:[4,12],parent:28,pars:7,part:[35,37],partial:34,particular:[28,34,35],pass:4,peopl:[34,35],per:[12,28],perform:[34,35,40],philosophi:37,pictur:35,pip:40,pipelin:[34,35,38,39],place:[14,18,21,24],plain:28,pleas:[34,35,37],plu:35,png:39,point:35,popular:[34,35],port_expos:[1,5],pos_valu:12,pose:35,posit:[12,20,23,26,28,33,34,37,40],post:[34,35],postiv:28,potenti:35,preachitectur:34,precis:[38,39],pred_val:[14,20,23,26],predict:[29,34],prepar:28,press:34,pretrain:[33,34,35],previou:34,primit:28,print:28,prioriti:35,privat:39,probabl:35,problem:35,procedur:[35,38,39],process:28,produc:[38,39],product:35,program:39,project:[34,35,37],promot:34,properti:[7,9,10,11,14,18,21,24],protect:39,protocol:39,provid:[28,34,35,37],publish:[34,35,37],purpos:[28,35],py:39,python:40,pytorch:[0,6,12,13,33,34,35,37,38,39,40],pytorchtailor:11,pytorchtun:24,qa:[12,38],qualiti:[34,38,39],quantiti:34,question:[28,35,38],quickli:35,r:34,rais:39,randomli:28,re:40,reach:[35,37],read:[34,37],readi:[35,39],real:12,rearrang:35,reason:35,redoc:39,reduc:34,refer:33,reflect:28,regress:[29,34],reject:[38,39],relat:28,releas:34,relev:28,reli:28,relu:[33,39,40],rememb:[38,39],render:38,repeat:35,replic:[14,21],repres:28,represent:34,request:4,requir:34,rescal:12,research:35,respons:[34,35],rest:39,restrict:29,result:[34,35,38,39],retrain:35,revis:[34,35,37],rgb:12,rich:34,round:[38,39],row:28,runtim:4,runtime_arg:4,runtime_backend:[1,5],rvalu:[20,23,26],s:[28,34,35,38,39,40],said:34,same:[28,29,33,35,37,38,39],sampl:[28,34],save:[14,18,21,24,35],scale:12,schedul:34,score:28,scratch:[34,35,37],search:[28,34,35,37,38,39,40],section:[34,35,37],see:[35,39],seen:34,select:[34,38],self:[33,38],semant:38,sens:35,sentenc:28,sequenc:[12,29,34],sequenti:[33,38,39,40],serv:34,set:[12,33,35,38,39,40],sever:[38,39],shall:[34,35],shape:[28,29,38,39],share:[28,34,35,37],shot:28,should:[12,28,34,35,37],show:34,siames:14,siamesedataset:[19,22,25],siamesemixin:[15,19,22,25],similar:[34,38,39],simpl:[34,35],simpli:[28,34],simul:12,singl:[28,37],size:[29,34],slide:34,so:[28,34,35,38,39],soldier:34,solut:35,solv:[35,37],some:[28,34,35,37],sometim:34,sourc:[1,2,4,5,7,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,34],specif:34,speed:34,spy:34,start:28,step:[33,35,39],stick:37,still:35,store:[14,18,21,24,28,38],store_data:4,str:[1,2,7,9,10,11,17],strong:[34,35],structur:34,stuck:35,submodul:27,subpackag:27,summar:34,summari:28,suppli:[34,35],support:[37,39,40],supposedli:39,suppress:39,sure:40,swagger:39,synergi:35,syntax:35,synthet:[12,28,40],t:35,tag:[28,29,38,39],tailor:[0,27,28,29,37],take:[34,35],take_batch:4,taken:28,talk:[34,35],target_v:[14,20,23,26],task:[28,34,35,38,39,40],tell:38,tensor:39,tensor_numpi:39,tensorflow:[20,33,35,38,39,40],term:34,test:12,text:[12,28,29,34],textur:35,tf:[33,38,39,40],than:[28,34],thei:[14,18,21,24,35,37],them:[28,34,35,38,39],thi:[14,18,21,24,28,33,34,35,37,38,39,40],thing:35,think:35,those:[28,35],though:35,thought:[34,35,37],thread:[1,5],three:33,time:[14,18,21,24,28,35],tinker:34,to_ndarrai:12,todai:35,token:[12,28,29,34],too:35,tool:35,top:[35,38,39],torch:[25,26,33,38,39,40],total:12,toydata:[0,27,28,33,38,39,40],train:[28,29,33,34,35,37,38,39],train_data:[1,5,14,17,18,21,24,33,34,38,39],trainer:39,transform:33,trigger:39,trim:[34,37],triplet:14,tripletdataset:[19,22,25],tripletlay:[20,23,26,33],tripletmixin:[15,19,22,25],truncat:34,tune:[14,18,21,24,28,34,35,37,38,39,40],tuner:[0,27,28,29,37],two:[28,34,35],type:[1,2,5,7,9,10,11,12,14,17,18,21,24,28,38,39],typevar:2,ui:[34,37,38,39],underli:39,understand:[34,37],unfold:35,unifi:34,union:1,univers:35,unlabel:29,unlik:[34,37],up:[34,35,38,39,40],upsampl:12,upstream:34,uri:39,us:[7,9,10,11,28,33,34,35,37,38,39],user:[34,35,37,39],userwarn:39,util:[25,39],valid:[28,35],valu:[4,12,28,34,35],vector:[33,34,38,39,40],veri:35,via:[33,34,37],view:38,visual:39,vs:35,w:12,wa:35,wai:[28,34,35,40],want:[35,38,39,40],warn:39,we:[12,28,33,34,35,38,39,40],web:28,websit:35,weight:[14,18,21,24,33,34],well:35,welt:28,what:[34,35,37],when:[4,28,35,37],where:[28,29,34,35],wherea:28,which:[28,34,38],whole:35,why:34,wide:34,wiedersehen:28,wish:35,word:35,work:[34,35,40],world:28,would:35,wrap:[14,21],wrapped_model:[14,18,21,24],write:[33,38,39,40],writeabl:39,written:33,wrong_answ:[28,38],x:[12,29,33,34,38],yahaha:35,yaml:4,ye:[28,35],year:35,yet:35,yield:[38,39],you:[28,35,38,39,40],your:[28,34,38,40],zero:35,zip:35,zoo:34,zoom:35},titles:["finetuner package","finetuner.fit module","finetuner.helper module","finetuner.labeler package","finetuner.labeler.executor module","finetuner.labeler.fit module","finetuner.tailor package","finetuner.tailor.base module","finetuner.tailor.helper module","finetuner.tailor.keras package","finetuner.tailor.paddle package","finetuner.tailor.pytorch package","finetuner.toydata module","finetuner.tuner package","finetuner.tuner.base module","finetuner.tuner.dataset package","finetuner.tuner.dataset.helper module","finetuner.tuner.fit module","finetuner.tuner.keras package","finetuner.tuner.keras.datasets module","finetuner.tuner.keras.head_layers module","finetuner.tuner.paddle package","finetuner.tuner.paddle.datasets module","finetuner.tuner.paddle.head_layers module","finetuner.tuner.pytorch package","finetuner.tuner.pytorch.datasets module","finetuner.tuner.pytorch.head_layers module","finetuner","Data Format","Glossary","&lt;no title&gt;","Labeler","Tailor","Tuner","Decisions","Philosophy","&lt;no title&gt;","Overview","Finetuning Bi-LSTM on Text","Finetuning MLP on Image","Welcome to Finetuner!"],titleterms:{"1":28,Is:28,One:37,agnost:37,all:28,api:34,argument:34,backend:34,backstori:35,base:[7,14],bi:38,bidirect:33,build:[38,39],content:[0,3,6,9,10,11,13,15,18,21,24],covid:[28,33],data:[28,38,39],dataset:[15,16,19,22,25],decis:34,deliveri:35,design:34,dl:34,embed:[38,39],exampl:[28,33],executor:4,experi:37,fashion:[28,33],field:28,finetun:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,35,38,39,40],fit:[1,5,17,33],flexibl:37,format:28,framework:37,glossari:29,have:28,head_lay:[20,23,26],helper:[2,8,16],imag:39,interact:[38,39],interfac:37,jina:34,kera:[9,18,19,20],label:[3,4,5,28,31,34,38,39],last:35,learn:35,liner:37,lstm:[33,38],manag:37,match:28,method:33,mile:35,minimum:[34,37],mlp:[33,39],mnist:[28,33],model:[38,39],modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],okai:28,overview:37,packag:[0,3,6,9,10,11,13,15,18,21,24],paddl:[10,21,22,23],philosophi:35,pillar:[34,37],posit:35,prepar:[38,39],put:[38,39],pytorch:[11,24,25,26],qa:[28,33],relationship:34,requir:28,simpl:33,singl:34,sourc:28,submodul:[0,3,6,13,15,18,21,24],subpackag:[0,6,13],summari:34,supervis:28,support:34,tailor:[6,7,8,9,10,11,32,34],text:38,three:[34,37],togeth:[38,39],toydata:12,transfer:35,tune:33,tuner:[13,14,15,16,17,18,19,20,21,22,23,24,25,26,33,34],understand:28,welcom:40,why:35}})