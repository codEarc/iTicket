<?php

/*
 * This is the operator controller 
 * controlls all the request from the operator user
 * 
 */

class operator_controller extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index() {
        echo "this is the index";
    }

    public function video_uploder() {
        //loading uploader model
        $this->load->model('films_model');

        //loading view
        $this->load->view('video_uploader_view');

        //creating data array to upload to the database
        $data = array(
            'film_name' => $this->input->post('film_name'),
            'description' => $this->input->post('description'),
            'showing_date' => $this->input->post('showing_date')
        );

        if ($this->input->post('upload')) {
            $this->films_model->upload_video($data);
        }
        return;
    }
	// to upload images of theaters.
	function theater_uploader() 
	{
		$this->load->model('theater_model');
	
		
		if($this->input->post('upload')){
			$this->theater_model->do_upload();
		}
		$data['images']= $this->theater_model->get_images();
		$this->load->view('theaters_view');
		 return;
	}

}

?>
