<p align='justify'>
I am a machine learning engineer at the
<b>MediaTek</b>
in Taiwan and study in <b>deep learning</b>, <b>explainable AI (XAI)</b>, and
<b>computer vision</b>, recently involving <b>physics simulation</b>.
My research is on learning interpretable representations about the physical world.
</p><br>


## <i class="fa fa-chevron-right"></i> Education

<table class="table table-hover">
  <tr>
    <td>
      <span class='cvdate'>2018&nbsp;-&nbsp;2020</span>
      <strong>M.S. in Computer Science</strong>, <em>National Taiwan University</em>
        (4.18/4.30)
      <br>
        <p style='margin-top:-1em;margin-bottom:0em' markdown='1'>
        <br> Thesis: *<a href="https://github.com/ntubiolin/xcos" target="_blank">xCos: An Explainable Cosine Metric for Face Verification Task</a>*
        <br> Advisor: <a href="https://winstonhsu.info/" target="_blank">Winston H. Hsu</a>
        </p>
    </td>
  </tr>
  <tr>
    <td>
      <span class='cvdate'>2013&nbsp;-&nbsp;2018</span>
      <strong>B.S. in Electrical Engineering</strong>, <em>National Taiwan University</em>
        (3.99/4.00)
      <br>
    </td>
  </tr>
</table>


## <i class="fa fa-chevron-right"></i> Previous Positions
<table class="table table-hover">
<tr>
  <td style='padding-right:0;'>
<span class='cvdate'>Jun. 2021&nbsp;-&nbsp;Oct. 2021</span>
<p markdown="1" style='margin: 0'><strong>RD Engineer</strong>, <em>TSMC</em>, Taipei, Taiwan
</p>
  </td>
</tr>
<tr>
  <td style='padding-right:0;'>
<span class='cvdate'>Mar. 2020&nbsp;-&nbsp;Nov. 2020</span>
<p markdown="1" style='margin: 0'><strong>Deep Learning Research Intern</strong>, <em>thingnario Inc.</em>, Taipei, Taiwan
<span markdown="1" style="color:grey;font-size:1.3rem;margin: 0">
(Perform solar power forecasting using RNN.)
</span></p>
  </td>
</tr>
</table>


## <i class="fa fa-chevron-right"></i> Honors & Awards
<table class="table table-hover">
<tr>
  <td>
  <div style='float: right'>2020</div>
  <div>
        The Thirteenth TSC Thesis Award
  </div>
  </td>
  <!-- <td class='col-md-2' style='text-align:right;'>2020</td> -->
</tr>
</table>


## <i class="fa fa-chevron-right"></i> Publications

<!-- [<a href="https://github.com/bamos/cv/blob/master/publications/all.bib">BibTeX</a>] -->
Selected publications are <span style='background-color: #ffffd0'>highlighted.</span>
<!-- I most frequently publish at . -->
<br>
[<a href="https://scholar.google.com/citations?user=C5BBdwYAAAAJ">Google Scholar</a>: 0k+ citations and an h-index of 3.]
<br>

<h2>2022</h2>
<table class="table table-hover">

<tr id="tr-9857187" >
<td align='right' style='padding-left:0;padding-right:0;'>
1.
</td>
<td>
<a href='https://doi.ieeecomputersociety.org/10.1109/CVPRW56347.2022.00078' target='_blank'><img src="images/publications/9857187.png" onerror="this.style.display='none'" class="publicationImg" /></a> 
<em><a href='https://doi.ieeecomputersociety.org/10.1109/CVPRW56347.2022.00078' target='_blank'>GenISP: Neural ISP for Low-Light Machine Cognition</a> </em> 
[<a href='javascript:;'
    onclick='$("#abs_9857187").toggle()'>abs</a>]<br>
Igor&nbsp;Morawski, Yu-An&nbsp;Chen, <strong>Yu-Sheng&nbsp;Lin</strong>, Shusil&nbsp;Dangi, Kai&nbsp;He, and Winston&nbsp;H.&nbsp;Hsu<br>
CVPRW 2022  <br>

<div id="abs_9857187" style="text-align: justify; display: none" markdown="1">
Object detection in low-light conditions remains a challenging but important problem with many practical implications. Some recent works show that, in low-light conditions, object detectors using raw image data are more robust than detectors using image data processed by a traditional ISP pipeline. To improve detection performance in low-light conditions, one can fine-tune the detector to use raw image data or use a dedicated low-light neural pipeline trained with paired low- and normal-light data to restore and enhance the image. However, different camera sensors have different spectral sensitivity and learning-based models using raw images process data in the sensor-specific color space. Thus, once trained, they do not guarantee generalization to other camera sensors. We propose to improve generalization to unseen camera sensors by implementing a minimal neural ISP pipeline for machine cognition, named GenISP, that explicitly incorporates Color Space Transformation to a device-independent color space. We also propose a two-stage color processing implemented by two image-to-parameter modules that take down-sized image as input and regress global color correction parameters. Moreover, we propose to train our proposed GenISP under the guidance of a pre-trained object detector and avoid making assumptions about perceptual quality of the image, but rather optimize the image representation for machine cognition. At the inference stage, GenISP can be paired with any object detector. We perform extensive experiments to compare our proposed method to other low-light image restoration and enhancement methods in an extrinsic task-based evaluation and validate that GenISP can generalize to unseen sensors and object detectors. Finally, we contribute a low-light dataset of 7K raw images annotated with 46K bounding boxes for task-based benchmarking of future low-light image restoration and low-light object detection.
</div>

</td>
</tr>

</table>
<h2>2021</h2>
<table class="table table-hover">

<tr id="tr-yusheng2021" >
<td align='right' style='padding-left:0;padding-right:0;'>
2.
</td>
<td>
<a href='https://arxiv.org/abs/2003.05383' target='_blank'><img src="images/publications/yusheng2021.png" onerror="this.style.display='none'" class="publicationImg" /></a> 
<em><a href='https://arxiv.org/abs/2003.05383' target='_blank'>XCos: An Explainable Cosine Metric for Face Verification Task</a> </em> 
[<a href='javascript:;'
    onclick='$("#abs_yusheng2021").toggle()'>abs</a>] [<a href='https://github.com/ntubiolin/xcos' target='_blank'>code</a>] <br>
<strong>Yu-Sheng&nbsp;Lin</strong>, Zhe-Yu&nbsp;Liu, Yu-An&nbsp;Chen, Yu-Siang&nbsp;Wang, Ya-Liang&nbsp;Chang, and Winston&nbsp;H.&nbsp;Hsu<br>
TOMM 2021  <br>

<div id="abs_yusheng2021" style="text-align: justify; display: none" markdown="1">
We study the XAI (explainable AI) on the face recognition task, particularly the face verification. Face verification has become a crucial task in recent days and it has been deployed to plenty of applications, such as access control, surveillance, and automatic personal log-on for mobile devices. With the increasing amount of data, deep convolutional neural networks can achieve very high accuracy for the face verification task. Beyond exceptional performances, deep face verification models need more interpretability so that we can trust the results they generate. In this article, we propose a novel similarity metric, called explainable cosine (xCos), that comes with a learnable module that can be plugged into most of the verification models to provide meaningful explanations. With the help of xCos, we can see which parts of the two input faces are similar, where the model pays its attention to, and how the local similarities are weighted to form the output xCos score. We demonstrate the effectiveness of our proposed method on LFW and various competitive benchmarks, not only resulting in providing novel and desirable model interpretability for face verification but also ensuring the accuracy as plugging into existing face recognition models.
</div>

</td>
</tr>


<tr id="tr-morawski2021nod" >
<td align='right' style='padding-left:0;padding-right:0;'>
3.
</td>
<td>
<a href='https://www.bmvc2021-virtualconference.com/assets/papers/1126.pdf' target='_blank'><img src="images/publications/morawski2021nod.png" onerror="this.style.display='none'" class="publicationImg" /></a> 
<em><a href='https://www.bmvc2021-virtualconference.com/assets/papers/1126.pdf' target='_blank'>NOD: Taking a Closer Look at Detection under Extreme Low-Light Conditions with Night Object Detection Dataset</a> </em> 
[<a href='javascript:;'
    onclick='$("#abs_morawski2021nod").toggle()'>abs</a>] [<a href='https://github.com/igor-morawski/NOD' target='_blank'>code</a>] <br>
Igor&nbsp;Morawski, Yu-An&nbsp;Chen, <strong>Yu-Sheng&nbsp;Lin</strong>, and Winston&nbsp;H.&nbsp;Hsu<br>
BMVC 2021  <br>

<div id="abs_morawski2021nod" style="text-align: justify; display: none" markdown="1">
Recent work indicates that, besides being a challenge in producing perceptually pleasing images, low light proves more difficult for machine cognition than previously thought. In our work, we take a closer look at object detection in low light. First, to support the development and evaluation of new methods in this domain, we present a high-quality large-scale Night Object Detection (NOD) dataset showing dynamic scenes captured on the streets at night. Next, we directly link the lighting conditions to perceptual difficulty and identify what makes low light problematic for machine cognition. Accordingly, we provide instance-level annotation for a subset of the dataset for an in-depth evaluation of future methods. We also present an analysis of the baseline model performance to highlight opportunities for future research and show that low light is a non-trivial problem that requires special attention from the researchers. Further, to address the issues caused by low light, we propose to incorporate an image enhancement module into the object detection framework and two novel data augmentation techniques. Our image enhancement module is trained under the guidance of the object detector to learn image representation optimal for machine cognition rather than for the human visual system. Finally, experimental results confirm that the proposed method shows consistent improvement of the performance on low-light datasets.
</div>

</td>
</tr>

</table>


## <i class="fa fa-chevron-right"></i> Open Source Repositories
0k+ GitHub stars across all repositories.

<table class="table table-hover">
<tr>
  <td align='right' style='padding-right:0;padding-left:0;'>1.</td>
  <td>
    <span class='cvdate'>2021</span>
    <a href="https://github.com/ntubiolin/xcos">ntubiolin/xcos</a> |
    <i class="fa fas fa-star"></i> 83 |
    <em>xCos</em>
    <!--  -->
    <!--     ntubiolin/xcos  -->
    <!--  -->
  </td>
</tr>
</table>


## <i class="fa fa-chevron-right"></i> Teaching
<table class="table table-hover">
<tr>
  <td style='padding-right:0'><strong>Introduction to computer</strong> (I2C), TA</td>
  <td class='col-md-2' style='text-align:right; padding-left:0;'>F2018</td>
</tr>
</table>


## <i class="fa fa-chevron-right"></i> Skills
<table class="table table-hover">
<tr>
  <td class='col-md-2'>Programming</td>
  <td>
C++, Java, JavaScript, Python
  </td>
</tr>
<tr>
  <td class='col-md-2'>Frameworks</td>
  <td>
NumPy, Pandas, PyTorch, SciPy, Hydra
  </td>
</tr>
<tr>
  <td class='col-md-2'>Toolbox</td>
  <td>
Linux, vim, git, tmux, zsh
  </td>
</tr>
</table>
