import { styled } from "@material-ui/core"

export const inboxMails = [
  {
    month: "May",
    numberOfMails: 3,
    mails: [
      {
        sender: "Lorem Ipsum",
        senderInitial: "A",
        time: "Wed 7:32 AM",
        msg: "Sed ut perspiciatis unde omnis iste natus error sit volu tate…",
        defaultColor: {backgroundColor: '#8E562E'}
      },
      {
        sender: "Lorem Ipsum",
        senderInitial: "t",
        time: "Wed 7:32 AM",
        msg: "Sed ut perspiciatis unde omnis iste natus error sit volu tate…",
        defaultColor:  {backgroundColor: '#E3008C'},
      },
    ],
  },
  {
    month: "April",
    numberOfMails: 1,
    mails: [
      {
        sender: "Lorem Ipsum",
        senderInitial: "n",
        time: "Wed 7:32 AM",
        msg: "Sed ut perspiciatis unde omnis iste natus error sit volu tate…",
        defaultColor:  {backgroundColor:"#4F6BEE"}
      }
    ],
  },
  {
    month: "Older",
    numberOfMails: 5,
    mails: [
      {
        sender: "Lorem Ipsum",
        senderInitial: "Lorem Ipsum".charAt(0),
        time: "Wed 7:32 AM",
        msg: "Sed ut perspiciatis unde omnis iste natus error sit volu tate…",
        defaultColor:  {backgroundColor: "##CA5110"}
      },
      {
        sender: "Lorem Ipsum",
        senderInitial: "n",
        time: "Wed 7:32 AM",
        msg: "Sed ut perspiciatis unde omnis iste natus error sit volu tate…",
        defaultColor:  {backgroundColor: "#4F6BEE"}
      }
    ],
  },
];