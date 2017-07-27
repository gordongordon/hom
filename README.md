# Mobx-react-antd-mobile-boilerplate

This is a mobx react antd-mobile boilerplate! Which was modifed from Mobx-react-ant-boilerplate

How to:
npm install
npm start


![Mobx React Ant Switch Banner](https://s24.postimg.org/f1e4u9ead/Screen_Shot_2017_01_20_at_12_04_22_AM.png)

Two great technologies together at last - MobX and Ant.Design! What could be better?

This is a simple boilerplate based on the official MobX-React boilerplate, with Ant.Design pre-installed.

Check out [https://ant.design/](https://ant.design/) for information on using Ant.Design.

Keeping all users panel with SegmentControl of "New Responses" and "Old Matched Item"
Definition of New Matching:
Users have to respond to confirm his/her property is up today, or discard.
If up today, update by Create Day At, and new feed will be post into users matching panel.
otherwise, mark as old or discard.

New Response SegmentControl will only display Agents responses.

Note:
Only agents have new response feature.
Only users have new matching feature.

Agent SegmentControl with "Wait for response", "Have been response" and "Follow Up"
Wait for response only display all matched listing (Sorted by new day)
Have been Response only display all responsed property (Sorted by new day)
Follow UP only display who have been confirmed new matching (Sorted by new day)
