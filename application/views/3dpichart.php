<?php $this->load->view('pichart_header'); ?>


<?php  //<div id="piechart_3d" style="width: 900px; height: 500px;"></div> ?>

<?php 
    if(isset($s_data)){
        foreach ($s_data as $data){
            $seat_count[$data['s_id']] = intval($data['count']);
        }
    }
   $val =10;
?>
<script type="text/javascript" src="<?php echo base_url('jscr/pichart.js'); ?>">
    var val = <?php echo $val ?>
</script>
<div id="piechart_3d" style="width: auto; height: 500px;"></div>

<?php $this->load->view('pichart_footer') ?>