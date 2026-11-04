<?php
  
    echo "<pre>";
    print_r($_GET);
    echo "<pre>";
  if (isset($_GET['keyword']) && !empty($_GET['keyword']) ) {
    echo "نتائج البحث عن: " . $_GET['keyword']; 
  }else{
    echo "nothing to search about";
  }   
?>
