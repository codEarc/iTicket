<?php
	/**
	 * 
	 */
	class theater_model extends CI_Model {
		var $image_path;
		var $image_path_url;
		
		function __construct() {
			parent::__construct();
        	$this->image_path = realpath(APPPATH . '../images/theaters/');
			$this->image_path_url = base_url().'images/';
    }

    //upload images to the system
    public function do_upload() {

     
        $config = array(
            'max_size' => 5000,
            'allowed_types' => 'jpg|jpeg|png|gif',
            'upload_path' => $this->image_path
        );
		
		$this->load->library('upload',$config);
		$this->upload->do_upload();
		$image_data = $this->upload->data();
		
		$config = array(
		'source_image'=> $image_data['full_path'],
		'new_image' => $this->image_path . '/thumbs',
		'maintain_ration' => TRUE,
		'width' => 250,
		'height' => 200
		);
		
		$this->load->library('image_lib',$config);
		$this->image_lib->resize();
	 }
	public function get_images()
	{
		$files = scandir($this->image_path);
		$files = array_diff($files, array('.','..','thumbs'));
		
		$images = array();
		
		foreach ($files as $file) {
			$images[]=array(
			'url'=> $this->image_path_url . $file,
			'thumb_url'=> $this->image_path_url . 'thumbs/' . $file,
			);
		}
		return $images;
	}
	
    }
	
?>