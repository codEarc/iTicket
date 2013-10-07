<?php
/**
 * 
 */
class login extends CI_Controller {
	
	function index() 
	{
		$data['main_content'] = 'login_view' ;
		$this->load->view('template', $data);
	}
}



?>