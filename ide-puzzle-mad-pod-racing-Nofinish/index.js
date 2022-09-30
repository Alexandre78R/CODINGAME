/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop
while (true) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    const nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    const nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    const nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
    const nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
    var inputs = readline().split(' ');
    const opponentX = parseInt(inputs[0]);
    const opponentY = parseInt(inputs[1]);

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // var thurst = 0;
    // var BOOST = false;
    // var pods = 0;

    // if (nextCheckpointAngle > 90 || nextCheckpointAngle < -90){
    //     thurst = 0;
    //     BOOST = true;
    // } else {
    //     thurst = 100;
    //     BOOST = true;
    // }

    // if (BOOST == true){
    //     pods = 100;
    // }


    //plus tard
    // var thurst = 0;
    // var pods = 0;

    // if (nextCheckpointAngle > 90 || nextCheckpointAngle < -90){
    //     thurst = 0;
    //     console.log(x, y, thurst)
    //     if (nextCheckpointDist > 100){
    //         console.log(nextCheckpointX + ' ' + nextCheckpointY + ` ${thurst}`+' BOOST');
            
    //     } else {
    //         console.log(nextCheckpointX + ' ' + nextCheckpointY  + " " + thrust);
    //     }
    // } else {
    //     thurst = 100;
    //     if (nextCheckpointDist > 100){
    //         console.log(nextCheckpointX + ' ' + nextCheckpointY + ` ${thurst}`+' BOOST');
            
    //     } else {
    //         console.log(nextCheckpointX + ' ' + nextCheckpointY  + " " + thrust);
    //     }
    // }

    // if (BOOST == true){
    //     pods = 100;
    // }


    // var thurst = 0;
    // var pods = 0;

    // if (nextCheckpointDist > 100){
    //     thurst = "BOOST";
    // }   else if (nextCheckpointAngle > 90 || nextCheckpointAngle < -90){
    //     thurst = 0;
    // }   else {
    //     thurst = 100;
    // }

    // console.log(nextCheckpointX + ' ' + nextCheckpointY + ` ${thurst}`+' BOOST');


    var thurst = 0;
    // var BOOST = false;
    // var pods = 0;

    if (nextCheckpointAngle > 180 || nextCheckpointAngle < -180){
        thurst = "BOOST ";
        // BOOST = true;
    }else if (nextCheckpointAngle > 180 || nextCheckpointAngle < -180){
        thurst = 100;
    }else if (nextCheckpointAngle > 90 || nextCheckpointAngle < -90){
        thurst = 50;
        // BOOST = true;
    }else if (nextCheckpointAngle > 90 || nextCheckpointAngle < -90){
        thurst = 100;
        // BOOST = true;
    }

    // if (BOOST == true){
    //     thurst = "BOOST";
    // }

    console.log(nextCheckpointX + ' ' + nextCheckpointY + ` ` + ` ${thurst}`);

    // console.log(x, y, thurst)
    // You have to output the target position
    // followed by the power (0 <= thrust <= 100)
    // i.e.: "x y thrust"



    // console.log(nextCheckpointX + ' ' + nextCheckpointY + ` ${thurst}`+' BOOST');
}