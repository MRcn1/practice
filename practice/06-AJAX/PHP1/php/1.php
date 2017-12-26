<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<table width='100%' border='1px' cellspacing="0">
	<tbody>
		<?php 
			for($i=1;$i<=9;$i++){
				echo '<tr>';
				for($o=1;$o<=$i;$o++){
					echo '<td>';
					echo($i.'X'.$o.'='.$i*$o);
					echo '</td>';
				};
				echo '</tr>';
			};
		?>
	</tbody>
</table>
</body>
</html>