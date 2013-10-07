<?php

/**
 * 
 */
class theaters_controller extends CI_Controller {
	
	public function index()
	{
		$this->home();
	}
	
	public function theater_display()
	{
			
		$this->load->view('show_theaters_view');
	}
	
	public function home()
	{
		echo "film detail viewer..";
	}
}


?>