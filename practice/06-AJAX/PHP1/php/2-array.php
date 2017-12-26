<?php
	echo '<table width="100%" border="1">';
		echo '<thead>';
			echo '<tr>';
				echo '<td>id</td><td>name</td><td>pric</td><td>birthday</td><td>isOnsale</td><td>pic</td>';
			echo '</tr>';
		echo '</thead>';
		echo '<tbody>';
			
				$list=[
					['id'=>1,'name'=>'苹果','pric'=>5,'birthday'=>'2017-1-1','isOnsale'=>true,'pic'=>'img/1.jpg'],
					['id'=>2,'name'=>'雪梨','pric'=>4,'birthday'=>'2017-3-2','isOnsale'=>false,'pic'=>'img/2.jpg'],
					['id'=>3,'name'=>'西瓜','pric'=>2,'birthday'=>'2017-4-1','isOnsale'=>true,'pic'=>'img/3.jpg'],
					['id'=>4,'name'=>'香蕉','pric'=>12,'birthday'=>'2017-5-6','isOnsale'=>false,'pic'=>'img/4.jpg'],
					['id'=>5,'name'=>'菠萝','pric'=>21,'birthday'=>'2017-1-1','isOnsale'=>true,'pic'=>'img/5.jpg']
				];
				for($r=0; $r<count($list); $r++){
					$p=$list[$r];
					echo '<tr>';
						echo "<td>$p[id]</td>";
						echo "<td>$p[name]</td>";
						echo "<td>$p[pric]</td>";
						echo "<td>$p[birthday]</td>";
						echo "<td>$p[isOnsale]</td>";
						echo "<td>$p[pic]</td>";
					echo '</tr>';
				}
		echo '</tbody>';
	echo '</table>';
?>