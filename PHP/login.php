<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name  = $_POST['name']  ?? 'غير محدد';
    $score = $_POST['score'] ?? 'مفيش';
    
    echo "مرحباً بالطالب: " . $name . "<br>";
    echo "الدرجة المسجلة: " . $score;
}
?>