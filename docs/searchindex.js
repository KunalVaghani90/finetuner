Search.setIndex({docnames:["api/finetuner","api/finetuner.helper","api/finetuner.labeler","api/finetuner.labeler.executor","api/finetuner.tailor","api/finetuner.tailor.base","api/finetuner.tailor.keras","api/finetuner.tailor.paddle","api/finetuner.tailor.pytorch","api/finetuner.toydata","api/finetuner.tuner","api/finetuner.tuner.base","api/finetuner.tuner.dataset","api/finetuner.tuner.dataset.helper","api/finetuner.tuner.keras","api/finetuner.tuner.keras.datasets","api/finetuner.tuner.keras.losses","api/finetuner.tuner.logger","api/finetuner.tuner.paddle","api/finetuner.tuner.paddle.datasets","api/finetuner.tuner.paddle.losses","api/finetuner.tuner.pytorch","api/finetuner.tuner.pytorch.datasets","api/finetuner.tuner.pytorch.losses","api/modules","basics/data-format","basics/fit","basics/glossary","basics/index","components/index","components/labeler","components/overview","components/tailor","components/tuner","design/design-decisions","design/design-philo","design/index","design/overview","get-started/covid-qa","get-started/fashion-mnist","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/finetuner.rst","api/finetuner.helper.rst","api/finetuner.labeler.rst","api/finetuner.labeler.executor.rst","api/finetuner.tailor.rst","api/finetuner.tailor.base.rst","api/finetuner.tailor.keras.rst","api/finetuner.tailor.paddle.rst","api/finetuner.tailor.pytorch.rst","api/finetuner.toydata.rst","api/finetuner.tuner.rst","api/finetuner.tuner.base.rst","api/finetuner.tuner.dataset.rst","api/finetuner.tuner.dataset.helper.rst","api/finetuner.tuner.keras.rst","api/finetuner.tuner.keras.datasets.rst","api/finetuner.tuner.keras.losses.rst","api/finetuner.tuner.logger.rst","api/finetuner.tuner.paddle.rst","api/finetuner.tuner.paddle.datasets.rst","api/finetuner.tuner.paddle.losses.rst","api/finetuner.tuner.pytorch.rst","api/finetuner.tuner.pytorch.datasets.rst","api/finetuner.tuner.pytorch.losses.rst","api/modules.rst","basics/data-format.md","basics/fit.md","basics/glossary.md","basics/index.md","components/index.md","components/labeler.md","components/overview.md","components/tailor.md","components/tuner.md","design/design-decisions.md","design/design-philo.md","design/index.md","design/overview.md","get-started/covid-qa.md","get-started/fashion-mnist.md","index.md"],objects:{"":{finetuner:[0,0,0,"-"]},"finetuner.helper":{AnyDNN:[1,2,1,""],AnyDataLoader:[1,2,1,""],AnyOptimizer:[1,2,1,""],DocumentArrayLike:[1,2,1,""],DocumentSequence:[1,2,1,""],LayerInfoType:[1,2,1,""],TunerReturnType:[1,2,1,""],get_framework:[1,1,1,""],is_seq_int:[1,1,1,""]},"finetuner.labeler":{executor:[3,0,0,"-"],fit:[2,1,1,""]},"finetuner.labeler.executor":{DataIterator:[3,3,1,""],FTExecutor:[3,3,1,""]},"finetuner.labeler.executor.DataIterator":{add_fit_data:[3,4,1,""],requests:[3,5,1,""],store_data:[3,4,1,""],take_batch:[3,4,1,""]},"finetuner.labeler.executor.FTExecutor":{embed:[3,4,1,""],fit:[3,4,1,""],get_embed_model:[3,4,1,""],requests:[3,5,1,""],save:[3,4,1,""]},"finetuner.tailor":{base:[5,0,0,"-"],display:[4,1,1,""],get_tailor_class:[4,1,1,""],keras:[6,0,0,"-"],paddle:[7,0,0,"-"],pytorch:[8,0,0,"-"],to_embedding_model:[4,1,1,""]},"finetuner.tailor.base":{BaseTailor:[5,3,1,""]},"finetuner.tailor.base.BaseTailor":{display:[5,4,1,""],embedding_layers:[5,6,1,""],summary:[5,4,1,""],to_embedding_model:[5,4,1,""]},"finetuner.tailor.keras":{KerasTailor:[6,3,1,""]},"finetuner.tailor.keras.KerasTailor":{summary:[6,4,1,""],to_embedding_model:[6,4,1,""]},"finetuner.tailor.paddle":{PaddleTailor:[7,3,1,""]},"finetuner.tailor.paddle.PaddleTailor":{summary:[7,4,1,""],to_embedding_model:[7,4,1,""]},"finetuner.tailor.pytorch":{PytorchTailor:[8,3,1,""]},"finetuner.tailor.pytorch.PytorchTailor":{summary:[8,4,1,""],to_embedding_model:[8,4,1,""]},"finetuner.toydata":{generate_fashion_match:[9,1,1,""],generate_qa_match:[9,1,1,""]},"finetuner.tuner":{base:[11,0,0,"-"],dataset:[12,0,0,"-"],fit:[10,1,1,""],get_tuner_class:[10,1,1,""],keras:[14,0,0,"-"],logger:[17,0,0,"-"],paddle:[18,0,0,"-"],pytorch:[21,0,0,"-"],save:[10,1,1,""]},"finetuner.tuner.base":{BaseDataset:[11,3,1,""],BaseLoss:[11,3,1,""],BaseTuner:[11,3,1,""]},"finetuner.tuner.base.BaseLoss":{arity:[11,5,1,""]},"finetuner.tuner.base.BaseTuner":{arity:[11,6,1,""],embed_model:[11,6,1,""],fit:[11,4,1,""],save:[11,4,1,""]},"finetuner.tuner.dataset":{SiameseMixin:[12,3,1,""],TripletMixin:[12,3,1,""],helper:[13,0,0,"-"]},"finetuner.tuner.dataset.helper":{get_dataset:[13,1,1,""]},"finetuner.tuner.keras":{KerasTuner:[14,3,1,""],datasets:[15,0,0,"-"],losses:[16,0,0,"-"]},"finetuner.tuner.keras.KerasTuner":{fit:[14,4,1,""],save:[14,4,1,""]},"finetuner.tuner.keras.datasets":{SiameseDataset:[15,3,1,""],TripletDataset:[15,3,1,""]},"finetuner.tuner.keras.losses":{CosineSiameseLoss:[16,3,1,""],CosineTripletLoss:[16,3,1,""],EuclideanSiameseLoss:[16,3,1,""],EuclideanTripletLoss:[16,3,1,""]},"finetuner.tuner.keras.losses.CosineSiameseLoss":{arity:[16,5,1,""],call:[16,4,1,""]},"finetuner.tuner.keras.losses.CosineTripletLoss":{arity:[16,5,1,""],call:[16,4,1,""]},"finetuner.tuner.keras.losses.EuclideanSiameseLoss":{arity:[16,5,1,""],call:[16,4,1,""]},"finetuner.tuner.keras.losses.EuclideanTripletLoss":{arity:[16,5,1,""],call:[16,4,1,""]},"finetuner.tuner.logger":{LogGenerator:[17,3,1,""]},"finetuner.tuner.logger.LogGenerator":{get_log_value:[17,4,1,""],get_statistic:[17,4,1,""],mean_loss:[17,4,1,""]},"finetuner.tuner.paddle":{PaddleTuner:[18,3,1,""],datasets:[19,0,0,"-"],losses:[20,0,0,"-"]},"finetuner.tuner.paddle.PaddleTuner":{fit:[18,4,1,""],save:[18,4,1,""]},"finetuner.tuner.paddle.datasets":{SiameseDataset:[19,3,1,""],TripletDataset:[19,3,1,""]},"finetuner.tuner.paddle.losses":{CosineSiameseLoss:[20,3,1,""],CosineTripletLoss:[20,3,1,""],EuclideanSiameseLoss:[20,3,1,""],EuclideanTripletLoss:[20,3,1,""]},"finetuner.tuner.paddle.losses.CosineSiameseLoss":{arity:[20,5,1,""],forward:[20,4,1,""]},"finetuner.tuner.paddle.losses.CosineTripletLoss":{arity:[20,5,1,""],forward:[20,4,1,""]},"finetuner.tuner.paddle.losses.EuclideanSiameseLoss":{arity:[20,5,1,""],forward:[20,4,1,""]},"finetuner.tuner.paddle.losses.EuclideanTripletLoss":{arity:[20,5,1,""],forward:[20,4,1,""]},"finetuner.tuner.pytorch":{PytorchTuner:[21,3,1,""],datasets:[22,0,0,"-"],losses:[23,0,0,"-"]},"finetuner.tuner.pytorch.PytorchTuner":{fit:[21,4,1,""],save:[21,4,1,""]},"finetuner.tuner.pytorch.datasets":{SiameseDataset:[22,3,1,""],TripletDataset:[22,3,1,""]},"finetuner.tuner.pytorch.losses":{CosineSiameseLoss:[23,3,1,""],CosineTripletLoss:[23,3,1,""],EuclideanSiameseLoss:[23,3,1,""],EuclideanTripletLoss:[23,3,1,""]},"finetuner.tuner.pytorch.losses.CosineSiameseLoss":{arity:[23,5,1,""],forward:[23,4,1,""]},"finetuner.tuner.pytorch.losses.CosineTripletLoss":{forward:[23,4,1,""]},"finetuner.tuner.pytorch.losses.EuclideanSiameseLoss":{arity:[23,5,1,""],forward:[23,4,1,""]},"finetuner.tuner.pytorch.losses.EuclideanTripletLoss":{arity:[23,5,1,""],forward:[23,4,1,""]},finetuner:{fit:[0,1,1,""],helper:[1,0,0,"-"],labeler:[2,0,0,"-"],tailor:[4,0,0,"-"],toydata:[9,0,0,"-"],tuner:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","data","Python data"],"3":["py","class","Python class"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:function","2":"py:data","3":"py:class","4":"py:method","5":"py:attribute","6":"py:property"},terms:{"0":[0,9,10,14,16,18,20,21,23,25,32,33,39,40],"00":39,"000":25,"00010502179":25,"001":[0,10,14,18,21],"002585097":25,"011804931":25,"028714137":25,"0e7ec5aa":25,"0e7ec7c6":25,"0e7ecd52":25,"0e7ece7":25,"1":[9,16,20,23,26,32,33,34,38,39,40],"10":[0,10,11,14,18,21,25,33],"100":[9,26,32,38,40],"1000":32,"100480":32,"102764544":32,"109":39,"112":32,"1180160":32,"11ec":[25,38,39],"128":[32,33,34,39,40],"12900":32,"132":39,"135":39,"14":32,"141":39,"147584":32,"16781312":32,"172":39,"1792":32,"18":39,"19":39,"1bab":39,"1bae":38,"1e008a366d49":[25,38,39],"1f9f":25,"1faa":25,"2":[9,11,16,20,23,25,26,32,33,38,39,40],"2021":34,"224":32,"22900":39,"231":39,"2359808":32,"25088":32,"2508900":32,"256":[0,10,11,14,18,21,32],"28":[32,33,39,40],"28x28":25,"295168":32,"3":[9,11,16,20,23,25,26,32,34,39,40],"31":39,"32":[32,33,38,39,40],"320000":32,"33":39,"3300":32,"36928":32,"3d":35,"4":[25,26,40],"4096":32,"409700":32,"4097000":32,"4128":32,"481":[9,25],"49":39,"5":[25,33],"5000":[32,33,38],"512":32,"52621":39,"56":[9,32,39],"5716974480":39,"5794172560":38,"590080":32,"6":25,"60":25,"60000":9,"64":[32,33,38],"65":39,"66048":32,"66560":32,"67":39,"67432a92":25,"67432cd6":25,"7":[32,39,40],"70":35,"73856":32,"784":32,"784x128x32":33,"9":39,"94":39,"99":35,"9a49":25,"abstract":[3,5,11],"case":[35,40],"class":[3,5,6,7,8,11,12,14,15,16,17,18,19,20,21,22,23,25,32,33,38,39],"default":[33,34],"do":[25,26,32,34,35,37,40],"final":[35,38,39],"float":[0,25],"function":[1,3,25,32],"import":[1,25,26,32,33,34,35,37,38,39,40],"int":[0,5,6,7,8,9,11,32],"new":[32,33,34,35,40],"public":[34,35,37,39,40],"return":[0,1,2,4,5,6,7,8,9,10,11,20,23,32,33,38],"static":17,"switch":[33,40],"true":[0,1,9,25,26,32,33,34,38,39,40],"try":34,A:27,And:35,As:34,At:34,But:[25,26,32,34,40],By:[33,34,37],For:[9,11,25,27,32,34],If:[9,25,35,38],In:[25,32,33,34,35,38,39,40],It:[1,5,6,7,8,9,25,32,33,34,35,37,38,40],Its:33,No:[26,40],On:34,One:[9,32,33],Or:35,That:[34,35],The:[1,5,6,7,8,9,25,31,34,35,38,39,40],Then:[25,35],There:[34,35],To:[5,6,7,8,25,32,34,37],With:35,_:[32,33,38],__init__:7,__module__:1,_i:33,_j:33,_n:33,_p:33,a207:39,a46a:25,a5dd3158:25,a5dd3784:25,a5dd3b94:25,a5dd3d74:25,aaaaaaaa:25,aaaaaaaaaaaaaa:39,aaaaaaaaaaaaaaaa:38,aaaaaaaaekaaaaaaaaawqaaaaaaaabpa:25,abc:[5,11],about:[25,26,33,34,35,37,40],ac8a:25,accept:[25,38,39],access:39,accompani:40,accord:[33,34],accur:32,accuraci:[35,39],achiev:32,across:34,action:32,activ:[31,32,33,34,37,39,40],actual:[1,34],ad:[32,35],adam:[0,10,14,18,21],adaptiveavgpool2d_32:32,add:[25,32],add_fit_data:3,addit:[3,32],address:39,adjac:25,adopt:34,advanc:25,affect:[34,35],after:[5,6,7,8,25,32,34,35,37,38,39],afterward:32,ag:35,again:[32,35],agnost:[34,40],ai:[34,35,37,40],aim:[34,37],alia:1,all:[5,6,7,8,9,26,32,33,34,40],allow:[11,14,18,21,25,34,35,37,40],alreadi:[26,34,40],also:[32,33,34,35,38],although:33,alwai:[3,25],among:35,an:[1,5,6,7,8,26,27,31,32,33,34,35,37,40],ani:[1,5,6,7,8,10,27,31,32,34,35,37,38,39,40],annot:34,answer:[25,26,35,38,40],anydataload:1,anydnn:[0,1,4,5,6,7,8,11,32],anymor:35,anyon:[35,37],anyoptim:1,anyth:25,apach:40,apart:32,api:[32,35,37,40],app:[35,37,40],append:25,appli:35,applic:[32,35,40],aqaaaaaaaaacaaaaaaaaaamaaaaaaaaa:25,ar:[3,5,6,7,8,25,26,32,33,34,35,38,39,40],ara:3,arbitari:34,arbitrari:34,architectur:[5,6,7,8,32,34],arg:[5,10,11,14,16,18,20,21,23],argu:37,argument:3,ariti:[11,13,16,20,23],around:35,arrai:[1,25,38,39],articl:35,arxiv:35,attract:35,auf:25,auto:3,avail:[5,6,7,8,39],avoid:3,awar:35,axi:9,b32d:38,b9557788:39,b:[9,25,27,34],baaaaaaaaaafaaaaaaaaaayaaaaaaaaa:25,back:[34,40],backend:[37,39,40],bad:25,baidu:34,bar:38,base64:39,base:[0,1,3,4,6,7,8,10,12,14,15,16,17,18,19,20,21,22,23,38,39],basedataset:[11,15,19,22],baseexecutor:3,baseloss:[11,16,20,23],basetailor:[5,6,7,8],basetun:[11,14,18,21],batch:[5,6,7,8,27,34],batch_first:[32,33,38],batch_siz:[0,10,11,14,18,21],beautifulli:34,becam:35,becaus:25,becom:35,been:38,befor:[35,39],behav:37,behavior:34,behind:34,being:35,believ:35,beliv:35,below:[25,26,33,34,35,37,40],bert:35,best:34,better:[11,14,18,21,31,34,35,37,38,39,40],between:[25,33,40],bidirect:[32,38],big:[33,34],bigger:9,bit:35,blank:35,blob:[25,38,39],block1_conv1:32,block1_conv2:32,block1_pool:32,block2_conv1:32,block2_conv2:32,block2_pool:32,block3_conv1:32,block3_conv2:32,block3_conv3:32,block3_pool:32,block4_conv1:32,block4_conv2:32,block4_conv3:32,block4_pool:32,block5_conv1:32,block5_conv2:32,block5_conv3:32,block5_pool:32,block:35,blog:34,bonjour:25,bool:[0,1,5,6,7,8,9,32],bottleneck:[32,34],brows:35,buffer:[25,38,39],build:[25,32,33,34,35,40],built:[25,33,35],butteri:40,button:35,c:[5,6,7,8,9],calendar:40,call:[11,14,16,18,21,25,32,33,34],callabl:1,cambridg:35,can:[5,6,7,8,9,25,26,31,32,33,34,35,37,38,39,40],carefulli:34,certain:32,chain:[34,35],chanc:35,chang:[11,14,18,21,35],channel:[9,25,40],channel_axi:9,chapter:[25,35,37],chat:40,chatbot:38,check:[5,6,7,8],china:34,chop:32,chosen:34,clarifi:34,classic:35,classif:[27,34],clear_labels_on_start:[0,2,3],click:35,cloud:35,co:33,code:[34,38],codebas:25,colleagu:34,collect:[34,35,37],color:35,column:25,combin:[25,31],come:[25,34],comfort:37,common:[34,35],commun:[34,40],compani:35,compat:34,compli:34,complic:35,compon:[27,31,32,33,34,37],compos:[31,37],comput:25,concat:32,concept:34,conduct:[31,34,37],config:[3,11,14,18,21],consecut:[11,14,18,21],consid:[25,34],consist:[32,34,37],construct:[25,33],contain:[25,27],content:[24,25,27,34,35,37,38],context:[25,40],continu:35,contrari:34,conv2d_11:32,conv2d_13:32,conv2d_15:32,conv2d_18:32,conv2d_1:32,conv2d_20:32,conv2d_22:32,conv2d_25:32,conv2d_27:32,conv2d_29:32,conv2d_3:32,conv2d_6:32,conv2d_8:32,converg:[38,39],convert:[5,6,7,8,25,26,27,31,32,34,38,39,40],copi:39,core:[35,37],correct:32,correctli:35,correspond:11,cosin:[3,25],cosinesiameseloss:[0,2,3,10,11,14,16,18,20,21,23,33],cosinetripletloss:[16,20,23,33],cost:[35,40],could:34,covid19:38,covidqa:38,cpp:39,cpu:[0,10,14,18,21],creat:35,critic:35,csrc:39,csv:25,current:35,cut:34,d8aaaaaaaaeqaaaaaaaaaxa:25,d:[25,27,34],da1:25,da2:25,dai:35,dam_path:3,data:[1,5,6,7,8,9,11,14,17,18,21,22,26,27,31,33,34,37,40],dataiter:3,dataset:[0,10,14,18,21,25,38,39],dc315d50:38,debug:25,decis:[35,37],decompress:35,decoupl:35,deep:[1,25,31,34,35,37,40],def:[32,33,38],defacto:35,defin:[5,6,7,8,32],definit:34,deliv:[34,35,40],deliveri:[34,37],demo:25,denot:33,dens:[5,25,32,33,38,39,40],dense_1:32,dense_2:32,depend:34,design:[35,37,40],desir:32,despit:34,detect:[27,34],determin:34,develop:[34,35,37],devic:[0,10,14,18,21],dict:[0,1,3,5,6,7,8,10,11],differ:[11,14,18,21,25,31,32,34],dim:[32,33,38,39,40],dimens:[27,32],dimension:[5,6,7,8,32,38,40],direct:[32,33,38],directli:[25,32,34],discuss:40,displai:[4,5],dive:40,diversifi:34,dnn:[1,5,6,7,8,27,34,35],dnn_model:[1,4,10],doc:[3,39],doctor:38,document:[1,9,25,27,33,34,38,39],documentarrai:[1,25,27,34,38,39],documentarraylik:[0,1],documentarraymemap:25,documentarraymemmap:[1,25,34,38,39],documentsequ:1,doe:[9,26,32,34,39,40],domain:35,don:[26,35,40],done:[34,35,39],download:35,downstream:34,dropout_35:32,dropout_38:32,dtype:[25,38,39],dure:3,e:[9,25,34],each:[9,25,27,33,34],earlier:35,easi:[26,35,40],easili:37,ecosystem:[34,35,37,40],edg:35,effect:35,effort:34,either:[25,32,33],ell_:33,emb:3,embed:[1,5,6,7,8,20,23,25,26,27,31,32,33,34,35,37,40],embed_model:[2,10,11,14,18,21,26,32,33,34,38,39,40],embedding_1:32,embedding_dim:[32,33,38],embedding_lay:[5,6,7,8],end:[32,34],endli:34,endpoint:3,engin:[35,40],enjoi:37,enlarg:34,enough:35,enpow:1,entrypoint:34,enviro:35,epoch:[0,10,11,14,18,21],equal:34,est:34,establish:35,euclideansiameseloss:[16,20,23,33],euclideantripletloss:[16,20,23,33],eval_data:[0,10,11,14,18,21,33],evalu:25,event:40,everi:[25,35,38,39,40],everyth:35,exactli:34,exampl:[9,11,27,34,38,39,40],except:32,exchang:34,executor:[0,2,35,39],exist:[32,33,34,35],expect:[3,9,35],experi:[34,40],explain:35,expos:[34,35],exposur:34,express:25,extend:25,exteremli:35,extra:3,extrem:[26,34,35,40],f4:39,f8:25,factor:9,fail:3,fals:[0,2,3,4,5,6,7,8,9,25,32],familiar:35,fashion:[9,39,40],fc1:32,fc2:32,featur:[35,40],feed:[3,25,33,38,39,40],feedback:[25,35,38,39],feel:[34,37],fetch:35,few:34,fewer:35,field:[3,5,6,7,8],file:35,fill:[3,25,27,34,35,38],find:[26,32,40],fine:32,finetun:[25,26,27,31,32,33,34,37],first:[32,34,35,38,39],fit:[0,2,3,10,11,14,18,21,25,27,32,34,37,38,39,40],fix:[9,25,34],flatten:[32,33,39,40],flatten_1:32,flatten_input:32,flexibl:34,float32:[0,4,5,6,7,8,32],flow:[34,39],fly:[25,26,34,40],folllow:33,follow:[25,32,33,34,35,38,39,40],form:[33,34],format:[33,34,38,39],forward:[20,23,32,33,38],forwardref:[0,4,10],found:35,four:25,frac:33,framework:[1,32,34,38,39,40],freeli:33,freez:[0,4,5,6,7,8,32,40],freeze_lay:34,from:[3,5,6,7,8,25,32,33,34,35,37,38,39,40],frontend:[25,40],frozen:32,ft:[34,37],ftexecutor:3,full:35,fulli:34,fundament:32,funnel:34,g:9,gap:34,gener:[5,6,7,8,9,25,27,32,33,34,35,37,38,39],general_model:[26,34,40],generate_fashion_match:[9,25,33,39,40],generate_qa_match:[9,25,33,38],get:[5,9,11,14,18,21,32,34,35,38,39,40],get_dataset:13,get_embed_model:3,get_framework:1,get_log_valu:17,get_statist:17,get_tailor_class:4,get_tuner_class:10,give:[1,9,32,34,37],given:[26,27,32,33,34,39,40],global:35,good:[25,34,35],goodby:25,googl:35,grai:9,grammar:35,graph:25,grayscal:[9,25],groundtruth:25,h236cf4:25,h:9,ha:[25,34,37],had:35,hallo:25,hand:[35,40],handl:34,hanxiao:39,happen:34,have:[9,26,32,34,35,38,40],heavi:35,hello:[25,38,39],help:[26,40],helper:[0,10,11,12,24,32],henc:[25,34],here:[25,32,33,34,35,37],hf:35,high:[32,34,35,37],highlight:35,hire:40,hopefulli:[38,39],how:[25,32,34,35,37,40],howev:[25,35],http:39,hub:35,huggingfac:[32,34,35],human:[34,35,40],i8:[25,38],i:[25,33,34,35,37,39],ical:40,id:[25,38,39],idea:[1,35,40],ident:[5,6,7,8,40],illustr:25,imag:[9,25,27,33,34],imaga:9,implement:[1,32,33,34],impli:37,improv:[25,35,38,39,40],in_featur:[32,33,38,39,40],includ:[5,6,7,8,25],include_identity_lay:[5,6,7,8],incorp:35,independ:[34,35],index:40,influr:35,info:[5,6,7,8,25],inform:[1,32],initi:34,inject:3,input:[1,5,6,7,8,11,15,16,19,22,25,27,32,33,34],input_dim:[32,33,38],input_dtyp:[0,4,5,6,7,8,32],input_s:[0,4,5,6,7,8,32],input_shap:[32,33,39,40],insid:[34,35,37],inspir:34,instal:40,instanc:25,int64:32,integ:[1,5,6,7,8,9],integr:40,interact:[0,25,26,31,34,37,40],interest:34,interfac:[34,35],intern:39,introduc:25,intuit:40,invok:34,io:19,irrelev:34,is_seq_int:1,is_testset:[9,33],item:25,iter:[1,32],its:[25,32,34,35,39],ivborw0k:39,j:33,jina:[1,3,25,35,37,38,39,40],job:34,just:35,k:[35,38,39],keep:35,kei:[1,33],kera:[0,1,4,10,32,33,34,37,38,39,40],kerastailor:6,kerastun:14,kersa:32,keyboard:[38,39],keyword:3,knowledg:35,kwarg:[2,3,4,5,10,11,14,16,18,20,21,23,33,34],label:[0,9,11,14,18,21,24,26,27,31,33,37,40],labeled_dam_path:3,labeled_data:[26,40],lambda:33,landscap:[34,35,37],languag:25,last:[5,6,7,8,32,34,37,40],lastcel:[32,33,38],lastcell_3:32,later:[34,35,37],latest:[34,40],layer:[1,5,6,7,8,16,32,33,34,38,39,40],layer_nam:[0,4,5,6,7,8,32],layerinfotyp:1,learn:[25,26,31,34,37,40],learning_r:[0,10,14,18,21],least:25,left:[33,38],length:[9,25],less:[34,35],let:[32,33,34,35,38,39,40],level:[32,34,35,37,40],leverag:[34,35],licens:40,like:[25,27,33],linear:[32,33,38,39,40],linear_2:32,linear_33:32,linear_34:32,linear_36:32,linear_39:32,linear_4:32,linear_5:32,liner:40,linux:40,list:[1,5,6,7,8,32],liter:35,live:40,load:[32,35],loader:1,local:39,localhost:39,loggener:17,logger:[0,10],logic:25,look:[32,33,34,35,37,38,39],loop:40,loss:[0,1,2,3,10,11,14,17,18,21,39],lstm_2:32,luckili:[26,40],m1:25,m2:25,m3:25,m:25,machin:[35,40],maco:40,made:25,mai:[32,34,35,37,39],maintain:34,major:34,make:[33,34,35,39,40],manag:34,mandatori:34,mani:35,manner:37,manual:[25,32],map:3,margin:[16,20,23],match:[9,27,33],mathbf:33,max:33,max_seq_len:9,maxim:34,maximum:9,maxpool2d_10:32,maxpool2d_17:32,maxpool2d_24:32,maxpool2d_31:32,maxpool2d_5:32,me:[34,35],mean:[25,34,38,39],mean_loss:17,meant:[34,35,37],meanwhil:[26,40],meet:40,member:40,memmap:1,mention:35,mesh:35,meta:3,metric:[1,3],micro:[32,34],microsoft:35,mile:[34,37,40],mime_typ:25,minimum:33,minor:34,minut:35,mission:35,mlp:[38,40],mnist:[9,39,40],mode:32,model:[0,1,4,5,6,7,8,11,14,18,21,25,26,27,31,33,34,35,37,40],model_path:10,modul:[24,32,33,38,40],mond:25,monet:35,month:40,more:[25,26,34,40],most:[34,35,37],mostli:34,motiv:35,mous:[35,38,39],movi:34,multipl:[11,14,18,21],multipli:35,must:[9,33,34,37],my:[34,35,37],myself:35,n:[33,35],name:[1,5,6,7,8,17,32],nativ:35,natuar:35,nb_param:32,ndarrai:[9,25,27,34],nearest:25,need:[7,25,26,32,33,34,35,40],neg:[9,25,33],neg_valu:9,neighbour:25,network:[1,11,25,31,34,37,39,40],neural:[1,25,31,34,35,37,40],next:[3,27,34,35],nich:35,nn:[20,23,32,33,38,39,40],non:39,none:[0,2,3,4,5,6,7,8,9,10,11,14,18,21,32],nontrain:32,note:[5,6,7,8,11,14,18,21,25,38,39],noth:[34,35],nov:34,now:[25,26,32,35,38,39,40],nowher:35,np:25,num_embed:[32,33,38],num_neg:[9,33],num_po:[9,33],num_tot:9,number:[9,25],numpi:[25,39],object:[1,11,12,17,25,27,34,38,39],observ:[32,34],obviou:35,off:32,often:[25,32,34,35],okayish:35,one:[11,14,18,21,25,32,33,34,35,37,40],onli:[25,33,34,35],opensourc:40,oper:[32,34],optim:[0,1,10,14,18,21],optimizer_kwarg:[0,10,14,18,21],option:[0,5,6,7,8,9,32,34],organ:25,origin:[5,6,7,8,25,32],other:[25,33,34,35,40],otherwis:25,our:[34,35,38,39,40],out:[26,32,33,35,38,40],out_featur:[32,33,38,39,40],output:[5,6,7,8,26,27,32,34,40],output_dim:[0,4,5,6,7,8,26,32,33,34,38,40],output_shape_displai:32,over:32,own:[25,32],p:33,packag:24,pad:38,paddl:[0,1,4,10,32,33,34,37,38,39,40],paddlepaddl:40,paddletailor:[5,6,7,8],paddletun:18,page:35,pair:33,paper:35,paragraph:[34,35,37],param:3,paramet:[1,3,5,6,7,8,9,32],parent:25,part:[5,6,7,8,35,37],partial:34,particular:[25,34,35],pass:[3,5],peopl:[34,35],per:[9,25],perceptron:32,perfect:[26,40],perform:[34,35,40],philosophi:37,pictur:35,pip:40,pipelin:[34,35,38,39],place:[11,14,18,21],plain:25,pleas:[34,35,37],plu:35,png:39,point:35,popular:[34,35],port_expos:[0,2],pos_valu:9,pose:35,posit:[9,25,33,34,37],post:[34,35],postiv:25,potenti:[5,6,7,8,35],power:40,preachitectur:34,precis:[38,39],predict:[27,32,33,34],prefix:17,prepar:25,preserv:32,press:34,pretrain:[33,34,35,40],previou:[32,34],primit:25,print:25,prioriti:35,privat:39,probabl:35,problem:[32,35],procedur:[35,38,39],process:25,produc:[38,39],product:[35,40],program:39,project:[31,34,35,37],promis:40,promot:34,properti:[5,11],protect:39,protocol:39,provid:[25,26,32,34,35,37,40],publish:[34,35,37],purpos:[25,35],py:39,python:40,pytorch:[0,4,9,10,32,33,34,35,37,38,39,40],pytorchtailor:[5,6,7,8],pytorchtun:21,qa:[9,38],qualiti:[34,38,39],quantiti:34,queri:40,question:[25,26,35,38,40],quickli:[26,35,40],r:34,rais:39,randomli:25,re:40,reach:[35,37],read:[34,37],readi:[35,39],real:9,rearrang:35,reason:35,redoc:39,reduc:[34,40],reduct:40,refer:33,reflect:25,regress:[27,34],reject:[38,39],relat:[25,33],releas:34,relev:25,reli:25,relu:[32,33,39,40],relu_12:32,relu_14:32,relu_16:32,relu_19:32,relu_21:32,relu_23:32,relu_26:32,relu_28:32,relu_2:32,relu_30:32,relu_34:32,relu_37:32,relu_3:32,relu_4:32,relu_7:32,relu_9:32,remain:32,rememb:[38,39],remov:[5,6,7,8,32],render:38,repeat:35,replac:32,repres:[25,33],represent:34,request:3,requir:[5,6,7,8,32,34],rescal:9,research:35,respect:33,respons:[34,35],rest:39,restrict:27,result:[34,35,38,39],retrain:35,revis:[34,35,37],rgb:9,rich:[34,40],right:33,round:[38,39],row:25,runtim:3,runtime_arg:3,runtime_backend:[0,2],s:[25,32,34,35,38,39,40],sai:32,said:34,same:[25,27,35,37,38,39],sampl:[25,34],save:[3,10,11,14,18,21,35],scale:9,scenario:31,schedul:34,score:25,scratch:[32,34,35,37],search:[25,34,35,37,38,39,40],second:40,section:[34,35,37],see:[5,6,7,8,32,35,39,40],seen:34,select:[32,34,38],self:[32,33,38],semant:38,sens:35,sentenc:25,sequenc:[1,5,6,7,8,9,27,34],sequenti:[32,33,38,39,40],serv:34,set:[5,6,7,8,9,32,35,38,39,40],sever:[38,39],shall:[34,35],shape:[5,6,7,8,25,27,38,39],share:[25,34,35,37],shot:25,should:[9,25,34,35,37],show:34,siames:[11,33,40],siamesedataset:[15,19,22],siamesemixin:[12,15,19,22],similar:[34,38,39],simpl:[34,35],simpli:[25,26,32,34,40],simul:9,singl:[25,37],size:[5,6,7,8,27,34],skip_identity_lay:[6,7,8],slack:40,slide:34,smooth:40,so:[25,34,35,38,39],soldier:34,solid:1,solut:[35,40],solv:[32,35,37],some:[25,26,32,34,35,37,40],sometim:34,sourc:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,34],specif:[32,34],speed:34,spy:34,start:25,step:[32,33,35,39],stick:37,still:35,store:[25,38],store_data:3,str:[0,1,5,6,7,8,10,32],stream:40,strong:[34,35],structur:34,stuck:35,submodul:24,subpackag:24,subscrib:40,summar:[33,34],summari:[5,6,7,8,25,32],suppli:[34,35],support:[37,39],supposedli:39,suppress:39,sure:[33,40],swagger:39,synergi:35,syntax:35,synthet:[9,25],t:[26,35,40],tabl:[5,32],tag:[25,27,38,39],tailor:[0,1,24,25,26,27,31,37,40],take:[34,35],take_batch:3,taken:25,talk:[34,35,40],target:[20,23],task:[25,34,35,38,39,40],tell:[1,38],tensor:[5,6,7,8,20,23,39],tensor_numpi:39,tensorflow:[16,32,33,35,38,39,40],term:34,test:9,text:[9,25,27,34],textur:35,tf:[32,33,38,39,40],than:[25,34],thei:[32,35,37],them:[25,32,34,35,38,39],thi:[1,7,11,14,18,21,25,26,32,33,34,35,37,38,39,40],thing:35,think:35,those:[25,35],though:35,thought:[34,35,37],thread:[0,2],three:[31,33],time:[11,14,18,21,25,32,35],tinker:34,to_embedding_model:[0,4,5,6,7,8,26,40],to_ndarrai:9,todai:35,token:[9,25,27,34],too:35,tool:[35,40],top:[35,38,39],torch:[1,22,23,32,33,38,39,40],torchvis:32,total:9,toydata:[0,24,25,33,38,39,40],tp:1,train:[1,25,26,27,33,34,35,37,38,39,40],train_data:[0,2,10,11,14,18,21,26,33,34,38,39,40],trainabl:32,trainer:39,transform:33,trigger:39,trim:[34,37,40],triplet:[11,33,40],tripletdataset:[15,19,22],tripletmixin:[12,15,19,22],truncat:34,tuesdai:40,tune:[25,31,32,34,35,37,38,39,40],tuner:[0,1,24,25,26,27,31,32,37,40],tunerreturntyp:[0,1],tupl:[0,5,6,7,8,32],tutori:40,two:[25,32,34,35],type:[0,1,2,4,5,6,7,8,9,10,11,20,23,25,32,38,39],typevar:1,ui:[31,34,37,38,39],under:[31,40],underli:39,understand:[34,37],unfold:35,unifi:34,union:1,univers:35,unlabel:27,unlabeled_data:[26,40],unlik:[34,37],unlock:40,unrel:33,up:[34,35,38,39,40],upsampl:9,upstream:34,uri:39,us:[1,5,6,7,8,25,26,31,32,33,34,35,37,38,39],usag:[26,40],user:[34,35,37,39],userwarn:39,util:[22,39],valid:[25,35],valu:[3,9,25,34,35],valueerror:1,vector:[33,34,38,39,40],veri:35,via:[26,31,32,33,34,37,40],video:40,view:38,vision:32,visual:39,vs:35,w:9,wa:35,wai:[25,34,35,40],want:[32,35,38,39,40],warn:39,we:[9,25,32,33,34,35,38,39,40],web:25,websit:35,weight:[5,6,7,8,11,14,18,21,32,33,34,40],well:35,welt:25,what:[26,34,35,37,40],when:[3,5,6,7,8,25,35,37,40],where:[25,27,33,34,35,40],wherea:[25,33],which:[25,26,32,34,38,40],whole:35,why:34,wide:34,wiedersehen:25,wish:35,without:1,word:35,work:[32,33,34,35,40],world:25,worri:[26,33,40],would:35,write:[33,38,39,40],writeabl:39,written:[32,33],wrong_answ:[25,38],x:[9,27,32,33,34,38],y_:33,yahaha:35,yaml:3,ye:[25,26,35,40],year:35,yet:[35,40],yield:[38,39],you:[5,6,7,8,25,26,32,33,35,38,39,40],your:[25,26,32,33,34,38,40],youtub:40,zero:35,zip:35,zoo:[32,34],zoom:[35,40]},titles:["finetuner package","finetuner.helper module","finetuner.labeler package","finetuner.labeler.executor module","finetuner.tailor package","finetuner.tailor.base module","finetuner.tailor.keras package","finetuner.tailor.paddle package","finetuner.tailor.pytorch package","finetuner.toydata module","finetuner.tuner package","finetuner.tuner.base module","finetuner.tuner.dataset package","finetuner.tuner.dataset.helper module","finetuner.tuner.keras package","finetuner.tuner.keras.datasets module","finetuner.tuner.keras.losses module","finetuner.tuner.logger module","finetuner.tuner.paddle package","finetuner.tuner.paddle.datasets module","finetuner.tuner.paddle.losses module","finetuner.tuner.pytorch package","finetuner.tuner.pytorch.datasets module","finetuner.tuner.pytorch.losses module","finetuner","Data Format","One-liner <code class=\"docutils literal notranslate\"><span class=\"pre\">fit()</span></code>","Glossary","&lt;no title&gt;","&lt;no title&gt;","Labeler","Overview","Tailor","Tuner","Decisions","Philosophy","&lt;no title&gt;","Overview","Finetuning Bi-LSTM on Text","Finetuning MLP on Image","Welcome to Finetuner!"],titleterms:{"1":25,"function":33,Is:25,One:[26,37],agnost:37,all:25,api:34,argument:34,backend:34,backstori:35,base:[5,11],bi:[32,38],bidirect:33,build:[38,39],content:[0,2,4,6,7,8,10,12,14,18,21],covid:[25,33],data:[25,38,39],dataset:[12,13,15,19,22],decis:34,deliveri:35,design:34,displai:32,dl:34,embed:[38,39],exampl:[25,32,33],executor:3,experi:37,fashion:[25,33],field:25,finetun:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,35,38,39,40],fit:[26,33],flexibl:37,format:25,framework:37,glossari:27,have:25,helper:[1,13],imag:39,interact:[38,39],interfac:37,jina:34,join:40,kera:[6,14,15,16],label:[2,3,25,30,34,38,39],last:35,learn:35,liner:[26,37],logger:17,loss:[16,20,23,33],lstm:[32,33,38],manag:37,match:25,method:[32,33],mile:35,minimum:[34,37],mlp:[32,33,39],mnist:[25,33],model:[32,38,39],modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],next:40,okai:25,overview:[31,37],packag:[0,2,4,6,7,8,10,12,14,18,21],paddl:[7,18,19,20],philosophi:35,pillar:[34,37],posit:35,prepar:[38,39],pretrain:32,put:[38,39],pytorch:[8,21,22,23],qa:[25,33],quick:40,relationship:34,requir:25,simpl:[32,33],singl:34,sourc:25,start:40,step:40,submodul:[0,2,4,10,12,14,18,21],subpackag:[0,4,10],summari:34,supervis:25,support:[34,40],tailor:[4,5,6,7,8,32,34],text:38,three:[34,37],tip:32,to_embedding_model:32,togeth:[38,39],toydata:9,transfer:35,tune:33,tuner:[10,11,12,13,14,15,16,17,18,19,20,21,22,23,33,34],understand:25,us:40,usag:31,vgg16:32,welcom:40,why:35}})