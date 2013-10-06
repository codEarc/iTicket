<?php $this->load->view('header');?>

<?php foreach ($s_data as $data){
    echo json_decode($data['count']);
} ?>


<?php $this->load->view('footer'); ?>
