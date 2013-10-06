<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

/* thsi is the manager model
 * 
 */

class manager_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function add_operator($data = NULL) {

        $o_data = array(
            'f_name' => $data['f_name'],
            'l_name' => $data['l_name'],
            'email' => $data['email'],
            'nic' => $data['nic'],
            'f_hall_id' => $data['f_hall']
        );

        $this->db->insert('operators', $o_data);
    }

    public function get_film_hall_data() {
        $this->db->select('f_hall_id, hall_name');
        $this->db->from('film_hall');

        $result = $this->db->get();

        if ($result->num_rows() > 0) {
            foreach ($result->result() as $row) {
                $data[] = $row;
            }
            return $data;
        }
    }

    public function get_reserv_data($data =NULL) {
        
        $date = '2013-10-04';
        $time_id = '1';
        
            $sql = "SELECT s_id, COUNT(l_id) as count
                    FROM location
                    WHERE l_id in
                    (SELECT lo_id
                    FROM ticket 
                    WHERE s_date = ?
                    AND
                    show_time_id = ? )
                    GROUP BY s_id";

            $query = $this->db->query($sql, array($date, $time_id ));

            if ($query->num_rows() > 0) {
                $data = $query->result_array();
                return $data;
            }  
        
    }
    
    public function get_show_time_id($film_hall_id =NULL){
        $this->db->select('id, time');
        $this->db->from('show_times');
        
        $result = $this->db->get();
        
        if($result->num_rows >0){
            foreach($result->result() as $row){
                $data[] = $row;
            }
            return $data;
        }
    }

}

?>
