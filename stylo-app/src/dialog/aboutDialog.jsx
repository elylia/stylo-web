import * as React from "react";
import InfoIcon from "@mui/icons-material/Info";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Tooltip,
  Icon,
  SvgIcon,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
function AboutDialog() {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <SvgIcon onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
        <svg
          width="16"
          zoomAndPan="magnify"
          viewBox="0 0 900 899.99999"
          height="16"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <path
            fill="#4d4d4d"
            d="M 450 0 C 442.636719 0 435.273438 0.179688 427.917969 0.542969 C 420.5625 0.902344 413.222656 1.445312 405.890625 2.167969 C 398.5625 2.890625 391.257812 3.789062 383.972656 4.871094 C 376.6875 5.953125 369.433594 7.210938 362.210938 8.648438 C 354.984375 10.082031 347.804688 11.695312 340.660156 13.484375 C 333.515625 15.277344 326.417969 17.238281 319.371094 19.375 C 312.324219 21.515625 305.332031 23.824219 298.398438 26.304688 C 291.464844 28.785156 284.597656 31.4375 277.792969 34.253906 C 270.988281 37.074219 264.257812 40.054688 257.601562 43.203125 C 250.941406 46.355469 244.367188 49.664062 237.871094 53.136719 C 231.375 56.605469 224.96875 60.234375 218.652344 64.023438 C 212.335938 67.808594 206.117188 71.746094 199.992188 75.839844 C 193.871094 79.929688 187.851562 84.167969 181.933594 88.554688 C 176.019531 92.945312 170.214844 97.472656 164.523438 102.144531 C 158.832031 106.816406 153.253906 111.625 147.796875 116.570312 C 142.339844 121.519531 137.007812 126.59375 131.800781 131.800781 C 126.59375 137.007812 121.519531 142.339844 116.570312 147.796875 C 111.625 153.253906 106.816406 158.832031 102.144531 164.523438 C 97.472656 170.214844 92.945312 176.019531 88.554688 181.933594 C 84.167969 187.851562 79.929688 193.871094 75.839844 199.992188 C 71.746094 206.117188 67.808594 212.335938 64.023438 218.652344 C 60.234375 224.96875 56.605469 231.375 53.136719 237.871094 C 49.664062 244.367188 46.355469 250.941406 43.203125 257.601562 C 40.054688 264.257812 37.074219 270.988281 34.253906 277.792969 C 31.4375 284.597656 28.785156 291.464844 26.304688 298.398438 C 23.824219 305.332031 21.515625 312.324219 19.375 319.371094 C 17.238281 326.417969 15.273438 333.515625 13.484375 340.660156 C 11.695312 347.804688 10.082031 354.984375 8.648438 362.210938 C 7.210938 369.433594 5.953125 376.6875 4.871094 383.972656 C 3.789062 391.257812 2.890625 398.5625 2.167969 405.890625 C 1.445312 413.222656 0.902344 420.5625 0.542969 427.917969 C 0.179688 435.273438 0 442.636719 0 450 C 0 457.363281 0.179688 464.726562 0.542969 472.082031 C 0.902344 479.4375 1.445312 486.777344 2.167969 494.109375 C 2.890625 501.4375 3.789062 508.742188 4.871094 516.027344 C 5.953125 523.3125 7.210938 530.566406 8.648438 537.789062 C 10.082031 545.011719 11.695312 552.195312 13.484375 559.339844 C 15.273438 566.484375 17.238281 573.582031 19.375 580.628906 C 21.515625 587.675781 23.824219 594.667969 26.304688 601.601562 C 28.785156 608.535156 31.4375 615.402344 34.253906 622.207031 C 37.074219 629.011719 40.054688 635.742188 43.203125 642.398438 C 46.355469 649.058594 49.664062 655.632812 53.136719 662.128906 C 56.605469 668.625 60.234375 675.03125 64.023438 681.347656 C 67.808594 687.664062 71.746094 693.882812 75.839844 700.007812 C 79.929688 706.128906 84.167969 712.148438 88.554688 718.066406 C 92.945312 723.980469 97.472656 729.785156 102.144531 735.476562 C 106.816406 741.171875 111.625 746.746094 116.570312 752.203125 C 121.519531 757.660156 126.59375 762.992188 131.800781 768.199219 C 137.007812 773.40625 142.339844 778.480469 147.796875 783.429688 C 153.253906 788.375 158.832031 793.183594 164.523438 797.855469 C 170.214844 802.527344 176.019531 807.054688 181.933594 811.441406 C 187.851562 815.832031 193.871094 820.070312 199.992188 824.160156 C 206.117188 828.253906 212.335938 832.191406 218.652344 835.976562 C 224.96875 839.765625 231.375 843.394531 237.871094 846.863281 C 244.367188 850.335938 250.941406 853.644531 257.601562 856.796875 C 264.257812 859.945312 270.988281 862.925781 277.792969 865.746094 C 284.597656 868.5625 291.464844 871.214844 298.398438 873.695312 C 305.332031 876.175781 312.324219 878.484375 319.371094 880.625 C 326.417969 882.761719 333.515625 884.722656 340.660156 886.515625 C 347.804688 888.304688 354.984375 889.917969 362.210938 891.351562 C 369.433594 892.789062 376.6875 894.046875 383.972656 895.128906 C 391.257812 896.210938 398.5625 897.109375 405.890625 897.832031 C 413.222656 898.554688 420.5625 899.097656 427.917969 899.457031 C 435.273438 899.820312 442.636719 900 450 900 C 457.363281 900 464.726562 899.820312 472.082031 899.457031 C 479.4375 899.097656 486.777344 898.554688 494.109375 897.832031 C 501.4375 897.109375 508.742188 896.210938 516.027344 895.128906 C 523.3125 894.046875 530.566406 892.789062 537.789062 891.351562 C 545.011719 889.917969 552.195312 888.304688 559.339844 886.515625 C 566.484375 884.722656 573.582031 882.761719 580.628906 880.625 C 587.675781 878.484375 594.667969 876.175781 601.601562 873.695312 C 608.535156 871.214844 615.402344 868.5625 622.207031 865.746094 C 629.011719 862.925781 635.742188 859.945312 642.398438 856.796875 C 649.058594 853.644531 655.632812 850.335938 662.128906 846.863281 C 668.625 843.394531 675.03125 839.765625 681.347656 835.976562 C 687.664062 832.191406 693.882812 828.253906 700.007812 824.160156 C 706.128906 820.070312 712.148438 815.832031 718.066406 811.441406 C 723.980469 807.054688 729.785156 802.527344 735.476562 797.855469 C 741.167969 793.183594 746.746094 788.375 752.203125 783.429688 C 757.660156 778.480469 762.992188 773.40625 768.199219 768.199219 C 773.40625 762.992188 778.480469 757.660156 783.429688 752.203125 C 788.375 746.746094 793.183594 741.167969 797.855469 735.476562 C 802.527344 729.785156 807.054688 723.980469 811.441406 718.066406 C 815.832031 712.148438 820.070312 706.128906 824.160156 700.007812 C 828.253906 693.882812 832.191406 687.664062 835.976562 681.347656 C 839.765625 675.03125 843.394531 668.625 846.863281 662.128906 C 850.335938 655.632812 853.644531 649.058594 856.796875 642.398438 C 859.945312 635.742188 862.925781 629.011719 865.746094 622.207031 C 868.5625 615.402344 871.214844 608.535156 873.695312 601.601562 C 876.175781 594.667969 878.484375 587.675781 880.625 580.628906 C 882.761719 573.582031 884.722656 566.484375 886.515625 559.339844 C 888.304688 552.195312 889.917969 545.011719 891.351562 537.789062 C 892.789062 530.566406 894.046875 523.3125 895.128906 516.027344 C 896.210938 508.742188 897.109375 501.4375 897.832031 494.109375 C 898.554688 486.777344 899.097656 479.4375 899.457031 472.082031 C 899.820312 464.726562 900 457.363281 900 450 C 899.992188 442.636719 899.808594 435.277344 899.441406 427.925781 C 899.074219 420.570312 898.527344 413.230469 897.800781 405.902344 C 897.070312 398.578125 896.164062 391.273438 895.082031 383.988281 C 893.996094 376.707031 892.730469 369.457031 891.292969 362.234375 C 889.851562 355.015625 888.234375 347.832031 886.441406 340.691406 C 884.648438 333.550781 882.679688 326.457031 880.539062 319.414062 C 878.398438 312.367188 876.085938 305.382812 873.601562 298.449219 C 871.117188 291.519531 868.464844 284.652344 865.644531 277.851562 C 862.824219 271.050781 859.839844 264.320312 856.6875 257.667969 C 853.539062 251.011719 850.226562 244.4375 846.753906 237.945312 C 843.28125 231.453125 839.652344 225.050781 835.863281 218.734375 C 832.078125 212.421875 828.136719 206.203125 824.046875 200.082031 C 819.953125 193.960938 815.714844 187.945312 811.328125 182.03125 C 806.941406 176.117188 802.410156 170.316406 797.738281 164.625 C 793.070312 158.933594 788.261719 153.359375 783.316406 147.902344 C 778.371094 142.449219 773.292969 137.117188 768.089844 131.910156 C 762.882812 126.707031 757.550781 121.628906 752.097656 116.683594 C 746.640625 111.738281 741.066406 106.929688 735.375 102.261719 C 729.683594 97.589844 723.882812 93.058594 717.96875 88.671875 C 712.054688 84.285156 706.039062 80.046875 699.917969 75.953125 C 693.796875 71.863281 687.578125 67.921875 681.265625 64.136719 C 674.949219 60.347656 668.546875 56.71875 662.054688 53.246094 C 655.5625 49.773438 648.988281 46.460938 642.332031 43.3125 C 635.679688 40.160156 628.949219 37.175781 622.148438 34.355469 C 615.347656 31.535156 608.480469 28.882812 601.550781 26.398438 C 594.621094 23.914062 587.632812 21.601562 580.585938 19.460938 C 573.542969 17.320312 566.449219 15.351562 559.308594 13.558594 C 552.167969 11.765625 544.984375 10.148438 537.765625 8.707031 C 530.542969 7.269531 523.292969 6.003906 516.011719 4.917969 C 508.726562 3.835938 501.421875 2.929688 494.097656 2.199219 C 486.769531 1.472656 479.429688 0.925781 472.074219 0.558594 C 464.722656 0.191406 457.363281 0.0078125 450 0 Z M 450.75 712.5 C 449.523438 712.507812 448.296875 712.453125 447.074219 712.335938 C 445.851562 712.222656 444.636719 712.050781 443.429688 711.816406 C 442.226562 711.582031 441.035156 711.289062 439.855469 710.941406 C 438.679688 710.589844 437.523438 710.179688 436.386719 709.71875 C 435.25 709.253906 434.136719 708.734375 433.050781 708.160156 C 431.964844 707.585938 430.910156 706.960938 429.882812 706.285156 C 428.859375 705.605469 427.871094 704.882812 426.917969 704.105469 C 425.964844 703.332031 425.050781 702.511719 424.179688 701.648438 C 423.304688 700.785156 422.476562 699.878906 421.695312 698.933594 C 420.910156 697.988281 420.175781 697.007812 419.488281 695.988281 C 418.800781 694.972656 418.164062 693.921875 417.578125 692.84375 C 416.996094 691.761719 416.464844 690.65625 415.988281 689.523438 C 415.511719 688.390625 415.09375 687.238281 414.730469 686.066406 C 414.371094 684.890625 414.066406 683.703125 413.820312 682.5 C 413.574219 681.296875 413.386719 680.085938 413.261719 678.863281 C 413.136719 677.640625 413.070312 676.414062 413.0625 675.1875 C 413.054688 673.960938 413.109375 672.734375 413.226562 671.511719 C 413.339844 670.289062 413.511719 669.074219 413.746094 667.867188 C 413.980469 666.664062 414.273438 665.472656 414.621094 664.292969 C 414.972656 663.117188 415.382812 661.960938 415.84375 660.824219 C 416.308594 659.6875 416.828125 658.574219 417.402344 657.488281 C 417.976562 656.402344 418.601562 655.347656 419.277344 654.320312 C 419.957031 653.296875 420.679688 652.308594 421.457031 651.355469 C 422.230469 650.402344 423.050781 649.488281 423.914062 648.617188 C 424.777344 647.742188 425.683594 646.914062 426.628906 646.132812 C 427.574219 645.347656 428.554688 644.613281 429.574219 643.925781 C 430.589844 643.238281 431.640625 642.601562 432.71875 642.015625 C 433.800781 641.433594 434.90625 640.902344 436.039062 640.425781 C 437.171875 639.949219 438.324219 639.53125 439.496094 639.167969 C 440.671875 638.808594 441.859375 638.503906 443.0625 638.257812 C 444.265625 638.011719 445.480469 637.824219 446.699219 637.699219 C 447.921875 637.574219 449.148438 637.507812 450.375 637.5 L 450.75 637.5 C 451.976562 637.5 453.203125 637.558594 454.425781 637.679688 C 455.648438 637.800781 456.859375 637.980469 458.066406 638.21875 C 459.269531 638.460938 460.460938 638.757812 461.636719 639.113281 C 462.8125 639.472656 463.964844 639.882812 465.101562 640.355469 C 466.234375 640.824219 467.34375 641.347656 468.425781 641.929688 C 469.511719 642.507812 470.5625 643.136719 471.582031 643.820312 C 472.605469 644.503906 473.589844 645.234375 474.539062 646.011719 C 475.488281 646.792969 476.398438 647.613281 477.265625 648.484375 C 478.136719 649.351562 478.957031 650.261719 479.738281 651.210938 C 480.515625 652.160156 481.246094 653.144531 481.929688 654.164062 C 482.613281 655.1875 483.242188 656.238281 483.820312 657.324219 C 484.402344 658.40625 484.925781 659.515625 485.394531 660.648438 C 485.867188 661.785156 486.277344 662.9375 486.636719 664.113281 C 486.992188 665.289062 487.289062 666.480469 487.53125 667.683594 C 487.769531 668.886719 487.949219 670.101562 488.070312 671.324219 C 488.191406 672.546875 488.25 673.773438 488.25 675 C 488.25 676.226562 488.191406 677.453125 488.070312 678.675781 C 487.949219 679.898438 487.769531 681.109375 487.53125 682.316406 C 487.289062 683.519531 486.992188 684.710938 486.636719 685.886719 C 486.277344 687.0625 485.867188 688.214844 485.394531 689.351562 C 484.925781 690.484375 484.402344 691.59375 483.820312 692.675781 C 483.242188 693.761719 482.613281 694.8125 481.929688 695.832031 C 481.246094 696.855469 480.515625 697.839844 479.738281 698.789062 C 478.957031 699.738281 478.136719 700.648438 477.265625 701.515625 C 476.398438 702.386719 475.488281 703.207031 474.539062 703.988281 C 473.589844 704.765625 472.605469 705.496094 471.582031 706.179688 C 470.5625 706.863281 469.511719 707.492188 468.425781 708.070312 C 467.34375 708.652344 466.234375 709.175781 465.101562 709.644531 C 463.964844 710.117188 462.8125 710.527344 461.636719 710.886719 C 460.460938 711.242188 459.269531 711.539062 458.066406 711.78125 C 456.859375 712.019531 455.648438 712.199219 454.425781 712.320312 C 453.203125 712.441406 451.976562 712.5 450.75 712.5 Z M 522.375 468.9375 C 519.878906 470.140625 517.472656 471.503906 515.15625 473.03125 C 512.84375 474.558594 510.644531 476.234375 508.554688 478.058594 C 506.464844 479.882812 504.511719 481.839844 502.6875 483.925781 C 500.859375 486.015625 499.183594 488.214844 497.65625 490.527344 C 496.128906 492.84375 494.761719 495.246094 493.558594 497.746094 C 492.355469 500.242188 491.324219 502.808594 490.464844 505.445312 C 489.609375 508.082031 488.929688 510.765625 488.433594 513.492188 C 487.9375 516.21875 487.625 518.96875 487.5 521.738281 C 487.507812 522.988281 487.453125 524.234375 487.339844 525.480469 C 487.226562 526.726562 487.054688 527.960938 486.824219 529.191406 C 486.589844 530.417969 486.300781 531.632812 485.949219 532.832031 C 485.601562 534.03125 485.195312 535.214844 484.734375 536.375 C 484.269531 537.535156 483.753906 538.671875 483.179688 539.785156 C 482.609375 540.894531 481.984375 541.976562 481.308594 543.027344 C 480.632812 544.078125 479.90625 545.097656 479.132812 546.078125 C 478.359375 547.058594 477.539062 548 476.675781 548.902344 C 475.8125 549.804688 474.90625 550.664062 473.957031 551.480469 C 473.011719 552.296875 472.027344 553.066406 471.003906 553.785156 C 469.984375 554.507812 468.929688 555.175781 467.84375 555.796875 C 466.757812 556.414062 465.644531 556.980469 464.503906 557.492188 C 463.363281 558.003906 462.203125 558.460938 461.019531 558.863281 C 459.832031 559.261719 458.632812 559.605469 457.417969 559.890625 C 456.199219 560.175781 454.972656 560.402344 453.730469 560.566406 C 452.492188 560.734375 451.25 560.839844 450 560.886719 C 448.792969 560.929688 447.589844 560.914062 446.382812 560.839844 C 445.179688 560.761719 443.980469 560.625 442.792969 560.429688 C 441.601562 560.230469 440.421875 559.976562 439.257812 559.660156 C 438.09375 559.347656 436.945312 558.976562 435.816406 558.546875 C 434.691406 558.117188 433.585938 557.632812 432.507812 557.09375 C 431.425781 556.554688 430.378906 555.960938 429.355469 555.316406 C 428.335938 554.671875 427.351562 553.976562 426.402344 553.234375 C 425.449219 552.492188 424.539062 551.703125 423.667969 550.867188 C 422.792969 550.035156 421.964844 549.15625 421.183594 548.242188 C 420.398438 547.324219 419.660156 546.371094 418.972656 545.378906 C 418.285156 544.386719 417.644531 543.363281 417.058594 542.308594 C 416.472656 541.253906 415.941406 540.171875 415.460938 539.066406 C 414.984375 537.957031 414.5625 536.828125 414.195312 535.679688 C 413.832031 534.527344 413.523438 533.363281 413.277344 532.179688 C 413.027344 531 412.835938 529.808594 412.707031 528.609375 C 412.578125 527.410156 412.507812 526.207031 412.5 525 C 412.488281 521.878906 412.582031 518.765625 412.785156 515.652344 C 412.988281 512.539062 413.296875 509.4375 413.710938 506.34375 C 414.125 503.253906 414.644531 500.179688 415.269531 497.121094 C 415.894531 494.066406 416.625 491.035156 417.457031 488.027344 C 418.289062 485.023438 419.222656 482.046875 420.257812 479.105469 C 421.296875 476.164062 422.429688 473.261719 423.664062 470.394531 C 424.902344 467.53125 426.234375 464.710938 427.660156 461.9375 C 429.089844 459.164062 430.609375 456.445312 432.222656 453.773438 C 433.839844 451.105469 435.542969 448.496094 437.335938 445.941406 C 439.128906 443.390625 441.007812 440.902344 442.972656 438.476562 C 444.933594 436.054688 446.980469 433.699219 449.105469 431.417969 C 451.230469 429.132812 453.429688 426.925781 455.707031 424.792969 C 457.980469 422.660156 460.328125 420.605469 462.746094 418.632812 C 465.160156 416.660156 467.644531 414.773438 470.1875 412.972656 C 472.734375 411.167969 475.339844 409.453125 478.003906 407.832031 C 480.667969 406.207031 483.382812 404.675781 486.148438 403.238281 C 487.867188 402.289062 489.546875 401.277344 491.1875 400.199219 C 492.824219 399.121094 494.417969 397.980469 495.96875 396.777344 C 497.519531 395.574219 499.019531 394.3125 500.46875 392.992188 C 501.921875 391.667969 503.316406 390.292969 504.660156 388.863281 C 506 387.433594 507.285156 385.949219 508.511719 384.417969 C 509.738281 382.886719 510.902344 381.3125 512.003906 379.6875 C 513.109375 378.066406 514.144531 376.402344 515.117188 374.695312 C 516.089844 372.992188 516.992188 371.253906 517.828125 369.476562 C 518.664062 367.703125 519.429688 365.898438 520.121094 364.0625 C 520.816406 362.226562 521.4375 360.367188 521.984375 358.484375 C 522.53125 356.597656 523.003906 354.695312 523.402344 352.777344 C 523.800781 350.855469 524.125 348.921875 524.371094 346.972656 C 524.617188 345.027344 524.789062 343.074219 524.882812 341.113281 C 524.976562 339.15625 524.992188 337.195312 524.929688 335.234375 C 524.871094 333.273438 524.734375 331.316406 524.519531 329.367188 C 524.304688 327.417969 524.015625 325.476562 523.648438 323.550781 C 523.289062 321.710938 522.855469 319.890625 522.359375 318.085938 C 521.863281 316.277344 521.296875 314.492188 520.667969 312.726562 C 520.039062 310.964844 519.34375 309.226562 518.585938 307.511719 C 517.828125 305.800781 517.007812 304.117188 516.121094 302.464844 C 515.238281 300.8125 514.296875 299.195312 513.292969 297.613281 C 512.289062 296.03125 511.230469 294.488281 510.113281 292.984375 C 508.996094 291.480469 507.824219 290.019531 506.601562 288.601562 C 505.375 287.1875 504.097656 285.816406 502.773438 284.492188 C 501.445312 283.171875 500.070312 281.898438 498.648438 280.679688 C 497.230469 279.457031 495.765625 278.289062 494.257812 277.179688 C 492.75 276.066406 491.203125 275.011719 489.617188 274.011719 C 488.035156 273.015625 486.414062 272.078125 484.757812 271.199219 C 483.105469 270.320312 481.417969 269.503906 479.703125 268.75 C 477.988281 268 476.246094 267.308594 474.480469 266.683594 C 472.714844 266.0625 470.925781 265.503906 469.121094 265.011719 C 467.3125 264.519531 465.488281 264.09375 463.648438 263.738281 C 462.300781 263.488281 460.949219 263.277344 459.589844 263.101562 C 458.230469 262.925781 456.867188 262.789062 455.5 262.6875 C 454.132812 262.585938 452.765625 262.523438 451.394531 262.496094 C 450.023438 262.472656 448.652344 262.484375 447.28125 262.535156 C 445.914062 262.582031 444.546875 262.671875 443.179688 262.796875 C 441.816406 262.921875 440.457031 263.082031 439.097656 263.28125 C 437.742188 263.480469 436.394531 263.714844 435.050781 263.988281 C 433.707031 264.261719 432.371094 264.574219 431.046875 264.917969 C 429.71875 265.265625 428.40625 265.648438 427.097656 266.066406 C 425.792969 266.484375 424.5 266.9375 423.222656 267.429688 C 421.941406 267.917969 420.675781 268.441406 419.421875 269 C 418.171875 269.558594 416.9375 270.152344 415.71875 270.777344 C 414.5 271.40625 413.296875 272.066406 412.113281 272.757812 C 410.929688 273.449219 409.769531 274.175781 408.625 274.929688 C 407.480469 275.6875 406.359375 276.472656 405.261719 277.289062 C 404.160156 278.109375 403.082031 278.957031 402.03125 279.832031 C 400.976562 280.710938 399.945312 281.613281 398.941406 282.546875 C 397.9375 283.480469 396.960938 284.441406 396.007812 285.425781 C 395.058594 286.414062 394.132812 287.425781 393.238281 288.460938 C 392.34375 289.5 391.476562 290.5625 390.636719 291.644531 C 389.800781 292.730469 388.992188 293.839844 388.214844 294.96875 C 387.4375 296.097656 386.695312 297.246094 385.980469 298.414062 C 385.265625 299.585938 384.585938 300.773438 383.933594 301.980469 C 383.285156 303.1875 382.671875 304.414062 382.089844 305.65625 C 381.507812 306.894531 380.960938 308.152344 380.449219 309.421875 C 379.933594 310.695312 379.457031 311.976562 379.015625 313.277344 C 378.570312 314.574219 378.164062 315.882812 377.796875 317.199219 C 377.425781 318.519531 377.089844 319.847656 376.792969 321.1875 C 376.496094 322.523438 376.234375 323.871094 376.007812 325.222656 C 375.785156 326.574219 375.597656 327.933594 375.449219 329.292969 C 375.300781 330.65625 375.1875 332.023438 375.113281 333.390625 C 375.035156 334.757812 375 336.128906 375 337.5 C 375 338.726562 374.941406 339.953125 374.820312 341.175781 C 374.699219 342.398438 374.519531 343.609375 374.28125 344.816406 C 374.039062 346.019531 373.742188 347.210938 373.386719 348.386719 C 373.027344 349.5625 372.617188 350.714844 372.144531 351.851562 C 371.675781 352.984375 371.152344 354.09375 370.570312 355.175781 C 369.992188 356.261719 369.363281 357.3125 368.679688 358.332031 C 367.996094 359.355469 367.265625 360.339844 366.488281 361.289062 C 365.707031 362.238281 364.886719 363.148438 364.015625 364.015625 C 363.148438 364.886719 362.238281 365.707031 361.289062 366.488281 C 360.339844 367.265625 359.355469 367.996094 358.332031 368.679688 C 357.3125 369.363281 356.261719 369.992188 355.175781 370.570312 C 354.09375 371.152344 352.984375 371.675781 351.851562 372.144531 C 350.714844 372.617188 349.5625 373.027344 348.386719 373.386719 C 347.210938 373.742188 346.019531 374.039062 344.816406 374.28125 C 343.609375 374.519531 342.398438 374.699219 341.175781 374.820312 C 339.953125 374.941406 338.726562 375 337.5 375 C 336.273438 375 335.046875 374.941406 333.824219 374.820312 C 332.601562 374.699219 331.386719 374.519531 330.183594 374.28125 C 328.980469 374.039062 327.789062 373.742188 326.613281 373.386719 C 325.4375 373.027344 324.285156 372.617188 323.148438 372.144531 C 322.015625 371.675781 320.90625 371.152344 319.824219 370.570312 C 318.738281 369.992188 317.6875 369.363281 316.667969 368.679688 C 315.644531 367.996094 314.660156 367.265625 313.710938 366.488281 C 312.761719 365.707031 311.851562 364.886719 310.984375 364.015625 C 310.113281 363.148438 309.292969 362.238281 308.511719 361.289062 C 307.734375 360.339844 307.003906 359.355469 306.320312 358.332031 C 305.636719 357.3125 305.007812 356.261719 304.429688 355.175781 C 303.847656 354.09375 303.324219 352.984375 302.855469 351.851562 C 302.382812 350.714844 301.972656 349.5625 301.613281 348.386719 C 301.257812 347.210938 300.960938 346.019531 300.71875 344.816406 C 300.480469 343.609375 300.300781 342.398438 300.179688 341.175781 C 300.058594 339.953125 300 338.726562 300 337.5 C 300 335.308594 300.050781 333.117188 300.144531 330.925781 C 300.242188 328.734375 300.386719 326.550781 300.582031 324.367188 C 300.773438 322.179688 301.015625 320.003906 301.300781 317.828125 C 301.589844 315.65625 301.925781 313.492188 302.308594 311.332031 C 302.691406 309.171875 303.125 307.023438 303.601562 304.886719 C 304.078125 302.746094 304.601562 300.617188 305.171875 298.5 C 305.742188 296.382812 306.359375 294.28125 307.023438 292.191406 C 307.6875 290.101562 308.394531 288.027344 309.148438 285.96875 C 309.902344 283.910156 310.703125 281.867188 311.542969 279.84375 C 312.386719 277.820312 313.277344 275.816406 314.207031 273.832031 C 315.136719 271.847656 316.113281 269.886719 317.128906 267.941406 C 318.148438 266 319.207031 264.082031 320.308594 262.1875 C 321.410156 260.292969 322.550781 258.421875 323.734375 256.574219 C 324.917969 254.730469 326.144531 252.910156 327.40625 251.121094 C 328.667969 249.328125 329.972656 247.566406 331.3125 245.832031 C 332.652344 244.09375 334.03125 242.390625 335.445312 240.71875 C 336.859375 239.042969 338.3125 237.398438 339.800781 235.789062 C 341.285156 234.179688 342.808594 232.601562 344.363281 231.058594 C 345.921875 229.515625 347.511719 228.003906 349.132812 226.53125 C 350.757812 225.054688 352.410156 223.617188 354.097656 222.21875 C 355.78125 220.816406 357.496094 219.453125 359.242188 218.125 C 360.988281 216.796875 362.761719 215.511719 364.5625 214.261719 C 366.367188 213.011719 368.195312 211.804688 370.050781 210.636719 C 371.902344 209.46875 373.785156 208.339844 375.6875 207.253906 C 377.59375 206.167969 379.519531 205.125 381.46875 204.121094 C 383.417969 203.121094 385.390625 202.164062 387.382812 201.246094 C 389.375 200.332031 391.386719 199.460938 393.417969 198.632812 C 395.445312 197.808594 397.496094 197.027344 399.558594 196.289062 C 401.625 195.550781 403.703125 194.859375 405.796875 194.214844 C 407.894531 193.566406 410 192.96875 412.121094 192.414062 C 414.246094 191.859375 416.375 191.355469 418.519531 190.894531 C 420.664062 190.433594 422.816406 190.019531 424.976562 189.65625 C 427.140625 189.289062 429.308594 188.972656 431.484375 188.699219 C 433.660156 188.429688 435.839844 188.207031 438.023438 188.03125 C 440.210938 187.855469 442.398438 187.730469 444.589844 187.652344 C 446.78125 187.570312 448.972656 187.539062 451.164062 187.558594 C 453.355469 187.574219 455.546875 187.640625 457.734375 187.753906 C 459.925781 187.867188 462.109375 188.027344 464.292969 188.234375 C 466.476562 188.445312 468.652344 188.703125 470.824219 189.003906 C 472.996094 189.308594 475.15625 189.660156 477.3125 190.0625 C 479.46875 190.460938 481.613281 190.90625 483.75 191.398438 C 485.886719 191.894531 488.011719 192.433594 490.125 193.019531 C 492.234375 193.605469 494.335938 194.238281 496.417969 194.917969 C 498.503906 195.59375 500.574219 196.320312 502.625 197.085938 C 504.679688 197.855469 506.714844 198.671875 508.730469 199.527344 C 510.75 200.386719 512.746094 201.289062 514.722656 202.234375 C 516.703125 203.179688 518.65625 204.171875 520.589844 205.203125 C 522.527344 206.234375 524.4375 207.308594 526.324219 208.421875 C 528.210938 209.539062 530.074219 210.695312 531.910156 211.890625 C 533.746094 213.089844 535.554688 214.324219 537.339844 215.601562 C 539.121094 216.878906 540.875 218.195312 542.597656 219.546875 C 544.324219 220.898438 546.019531 222.289062 547.679688 223.71875 C 549.34375 225.144531 550.976562 226.609375 552.578125 228.109375 C 554.175781 229.609375 555.742188 231.140625 557.273438 232.710938 C 558.804688 234.277344 560.304688 235.878906 561.765625 237.511719 C 563.226562 239.144531 564.652344 240.808594 566.042969 242.503906 C 567.433594 244.203125 568.785156 245.925781 570.097656 247.683594 C 571.410156 249.4375 572.683594 251.222656 573.917969 253.03125 C 575.15625 254.84375 576.351562 256.679688 577.503906 258.542969 C 578.660156 260.40625 579.773438 262.296875 580.84375 264.207031 C 581.917969 266.121094 582.945312 268.054688 583.933594 270.011719 C 584.921875 271.96875 585.863281 273.949219 586.765625 275.945312 C 587.664062 277.945312 588.519531 279.964844 589.332031 282 C 590.144531 284.035156 590.914062 286.089844 591.632812 288.160156 C 592.355469 290.230469 593.03125 292.3125 593.664062 294.414062 C 594.292969 296.511719 594.878906 298.625 595.414062 300.75 C 595.953125 302.875 596.445312 305.011719 596.886719 307.160156 C 597.332031 309.304688 597.730469 311.460938 598.078125 313.625 C 598.429688 315.789062 598.730469 317.960938 598.984375 320.136719 C 599.238281 322.316406 599.445312 324.5 599.605469 326.683594 C 599.765625 328.871094 599.875 331.058594 599.9375 333.25 C 600 335.441406 600.015625 337.632812 599.984375 339.828125 C 599.949219 342.019531 599.867188 344.207031 599.738281 346.398438 C 599.609375 348.585938 599.433594 350.769531 599.207031 352.953125 C 598.980469 355.132812 598.710938 357.308594 598.390625 359.476562 C 598.070312 361.644531 597.703125 363.804688 597.285156 365.957031 C 596.871094 368.109375 596.410156 370.253906 595.898438 372.386719 C 595.390625 374.515625 594.835938 376.636719 594.234375 378.746094 C 593.632812 380.855469 592.984375 382.949219 592.289062 385.027344 C 591.59375 387.105469 590.855469 389.171875 590.070312 391.21875 C 589.289062 393.265625 588.457031 395.292969 587.585938 397.304688 C 586.710938 399.316406 585.796875 401.304688 584.835938 403.277344 C 583.875 405.246094 582.871094 407.195312 581.824219 409.121094 C 580.777344 411.050781 579.691406 412.953125 578.5625 414.832031 C 577.433594 416.710938 576.261719 418.5625 575.050781 420.390625 C 573.839844 422.21875 572.589844 424.019531 571.300781 425.792969 C 570.011719 427.5625 568.683594 429.308594 567.316406 431.023438 C 565.953125 432.738281 564.546875 434.421875 563.109375 436.074219 C 561.667969 437.726562 560.191406 439.347656 558.683594 440.9375 C 557.171875 442.523438 555.625 444.078125 554.046875 445.601562 C 552.46875 447.121094 550.855469 448.605469 549.210938 450.054688 C 547.566406 451.507812 545.890625 452.917969 544.1875 454.296875 C 542.480469 455.671875 540.746094 457.011719 538.980469 458.3125 C 537.214844 459.613281 535.421875 460.875 533.601562 462.09375 C 531.78125 463.316406 529.933594 464.5 528.0625 465.640625 C 526.191406 466.78125 524.296875 467.878906 522.375 468.9375 Z M 522.375 468.9375"
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </svg>
      </SvgIcon>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{ height: "500px" }}
      >
        <DialogActions>
          <CloseIcon
            color="#9e9e9e"
            onClick={() => setOpen(false)}
            sx={{
              ":hover": {
                bgcolor: "#9e9e9e",
                color: "white",
              },
              cursor: "pointer",
            }}
          />
        </DialogActions>
        <DialogContent>
          <DialogTitle>About Stylo Web</DialogTitle>
          <DialogContentText sx={{ fontSize: 12, color: "black" }}>
            Test
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
export default AboutDialog;