window.globalProvideData('slide', '{"title":"Do you regularly post comments in the comments sections of news items, or in the comments sections of blogs and forums?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide28","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xF0B323","alpha":100,"stop":0}]}},"id":"5iV8hBlCUYo","actionGroups":{"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]},"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"or","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"5oTTQoRm2up.64BuQpTa4Zk.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]},{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"5oTTQoRm2up.5goT5b3N9Hn.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}]}]}},"thenActions":[{"kind":"playnextdrawslide"}]}]},"ReviewInt_5oTTQoRm2up":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5oTTQoRm2up.64BuQpTa4Zk"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5oTTQoRm2up.5goT5b3N9Hn"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6fnNRjOx62c.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oTTQoRm2up_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oTTQoRm2up_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_5oTTQoRm2up":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5oTTQoRm2up.64BuQpTa4Zk"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5oTTQoRm2up.5goT5b3N9Hn.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oTTQoRm2up.5goT5b3N9Hn"}}]},{"kind":"adjustvar","variable":"5oTTQoRm2up.5goT5b3N9Hn._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5oTTQoRm2up.5goT5b3N9Hn._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5oTTQoRm2up.5goT5b3N9Hn._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"5oTTQoRm2up.5goT5b3N9Hn.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5oTTQoRm2up.5goT5b3N9Hn"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5oTTQoRm2up":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5oTTQoRm2up"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_5oTTQoRm2up":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"5oTTQoRm2up.64BuQpTa4Zk.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"5oTTQoRm2up.5goT5b3N9Hn.ActGrpSetDisabledState"}]},"5oTTQoRm2up_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6WwoNjbUqdj","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6fnNRjOx62c.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6KnoYdjal8j.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5oTTQoRm2up"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6fnNRjOx62c.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6fnNRjOx62c.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5oTTQoRm2up"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_5iV8hBlCUYo":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},"NavigationRestrictionPreviousSlide_5iV8hBlCUYo":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxnanbnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxnanbnsnfns00000000101"}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5iV8hBlCUYo"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6WwoNjbUqdj","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5oTTQoRm2up","typea":"var","valueb":"6KnoYdjal8j","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6KnoYdjal8j"},"completed_slide_ref":{"type":"string","value":"_player.6Taa90DtORR.5hcOg3lWiCE"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6WwoNjbUqdj","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5oTTQoRm2up","typea":"var","valueb":"6KnoYdjal8j","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6KnoYdjal8j"},"completed_slide_ref":{"type":"string","value":"_player.6Taa90DtORR.5hcOg3lWiCE"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5iV8hBlCUYo"}]}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5f7pf9CQuev","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5f7pf9CQuev","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6WwoNjbUqdj","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6WwoNjbUqdj","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5oTTQoRm2up"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6WwoNjbUqdj","typea":"var","valueb":"6KnoYdjal8j","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6KnoYdjal8j.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5oTTQoRm2up"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6KnoYdjal8j.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5oTTQoRm2up"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"5oTTQoRm2up_CheckAnswered"}]}]}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":12000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5sH69SWJYps"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oTTQoRm2up"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oTTQoRm2up.5goT5b3N9Hn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5oTTQoRm2up.64BuQpTa4Zk"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6fTaElr3KVF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6m8hrBITZKK"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"63QiTUkjovr"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":195,"id":"01","url":"story_content/6PQFeJ01rO2_80_B-50_C-20_DX1442_DY1442.jpg","type":"normal","altText":"quizBackground.jpg","width":1300,"height":977,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360.5,"rotateYPos":271,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":721,"bottom":542,"altText":"quizBackground.jpg","pngfb":false,"pr":{"l":"Lib","i":154}},"html5data":{"xPos":0,"yPos":0,"width":721,"height":542,"strokewidth":0}},"width":721,"height":542,"resume":true,"useHandCursor":true,"id":"5sH69SWJYps"},{"kind":"scrollarea","contentwidth":680,"contentheight":85,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6l24MDe9OCy_-1697795863","id":"01","linkId":"txt__default_5goT5b3N9Hn","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":62,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":477}}}],"shapemaskId":"","xPos":24,"yPos":39,"tabIndex":6,"tabEnabled":true,"radioGroup":"Multiple Choice","xOffset":0,"yOffset":0,"rotateXPos":328,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":471}},"html5data":{"xPos":0,"yPos":0,"width":656,"height":46,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":471}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":472}},"html5data":{"xPos":-9,"yPos":-1,"width":665,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Disabled_Review","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-9,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":472}},"html5data":{"xPos":-9,"yPos":-1,"width":665,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":471}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":473}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":473}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":474}},"html5data":{"xPos":-9,"yPos":-1,"width":665,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled_Review","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-9,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":474}},"html5data":{"xPos":-9,"yPos":-1,"width":665,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":473}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":475}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":475}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":475}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":476}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":476}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"No","pngfb":false,"pr":{"l":"Lib","i":476}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}}],"width":656,"height":46,"resume":true,"useHandCursor":true,"id":"5goT5b3N9Hn","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.64BuQpTa4Zk.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.64BuQpTa4Zk._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.64BuQpTa4Zk"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6YlI7tSQeKl_-920749807","id":"01","linkId":"txt__default_64BuQpTa4Zk","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":65,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":478}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":5,"tabEnabled":true,"radioGroup":"Multiple Choice","xOffset":0,"yOffset":0,"rotateXPos":328,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":471}},"html5data":{"xPos":0,"yPos":0,"width":656,"height":46,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":471}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":471}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":473}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":473}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":473}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":475}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":475}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":475}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":476}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":476}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":656,"bottom":46,"altText":"Yes","pngfb":false,"pr":{"l":"Lib","i":476}},"html5data":{"xPos":-1,"yPos":-1,"width":657,"height":47,"strokewidth":3}}}],"width":656,"height":46,"resume":true,"useHandCursor":true,"id":"64BuQpTa4Zk","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.5goT5b3N9Hn.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.5goT5b3N9Hn._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.5goT5b3N9Hn"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"depth":1,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":16,"yPos":155,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":328,"rotateYPos":44,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":0,"yPos":0,"width":656,"height":88,"strokewidth":0}},"width":680,"height":88,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":680,"bottom":88,"altText":"Multiple Choice","pngfb":false,"pr":{"l":"Lib","i":470}}},"id":"5oTTQoRm2up"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6fTaElr3KVF_-1787134925","id":"01","linkId":"txt__default_6fTaElr3KVF","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":559,"bottom":49,"pngfb":false,"pr":{"l":"Lib","i":548}}}],"shapemaskId":"","xPos":31,"yPos":86,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":288.5,"rotateYPos":27,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":577,"bottom":54,"altText":"Do you regularly post comments in the comments sections of news items, or in the comments sections of blogs and forums?","pngfb":false,"pr":{"l":"Lib","i":494}},"html5data":{"xPos":0,"yPos":0,"width":577,"height":54,"strokewidth":0}},"width":577,"height":54,"resume":true,"useHandCursor":true,"id":"6fTaElr3KVF"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6m8hrBITZKK_686499785","id":"01","linkId":"txt__default_6m8hrBITZKK","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":320,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":481}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":32,"altText":"Are you addicted to your digital devices?","pngfb":false,"pr":{"l":"Lib","i":24}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":32,"strokewidth":0}},"width":720,"height":32,"resume":true,"useHandCursor":true,"id":"6m8hrBITZKK"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"63QiTUkjovr_-1224798287","id":"01","linkId":"txt__default_63QiTUkjovr","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":89,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":549}}}],"shapemaskId":"","xPos":31,"yPos":54,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":99,"bottom":32,"altText":"Q. 28 of 30","pngfb":false,"pr":{"l":"Lib","i":509}},"html5data":{"xPos":0,"yPos":0,"width":99,"height":32,"strokewidth":0}},"width":99,"height":32,"resume":true,"useHandCursor":true,"id":"63QiTUkjovr"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5oTTQoRm2up_CorrectReview","id":"01","linkId":"5oTTQoRm2up_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":400,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":485}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":484}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5oTTQoRm2up_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5oTTQoRm2up_IncorrectReview","id":"01","linkId":"5oTTQoRm2up_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":409,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":487}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":486}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5oTTQoRm2up_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');