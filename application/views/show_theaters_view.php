<?php $this->load->view('header'); ?>

	<td id= "navigation">
		<h3>..UP COMING MOVIES..</h3>
    <ul class= "subjects">
      	<h4>* Titanic..</h4>  
      
    </ul>
   
	</td>
	<body>
	<td id= "page">
			 <div id="gallery">
			  <h2>Our Theaters </h2>
	 		</div>
	 <div id="display">
	 <?php
	 	if(isset($images) && count($images)):
			foreach ($images as $image): ?>
			
				<div class="thumb">
					<a href="<php echo $image['url];?>">
						<img src="<<?php echo $image['thumb_url']; ?>"/>
					</a>
				</div>
			<?php endforeach; else: ?>
	 			<div id="blank_gallery">Please Upload an Image</div>
	 		<?php endif; ?>
	 	</div>
		</td>
	

	</body>
	  
<?php $this->load->view('footer'); ?>
	  
