package org.cocos2dx.lua;

import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;

import android.app.Activity;
import android.os.Bundle;
import android.view.ViewGroup.LayoutParams;
import android.widget.LinearLayout;

import android.app.NativeActivity;
import android.os.Bundle;
import android.widget.RelativeLayout;

import com.crosslife.FlappyBird.R;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;

public class Cocos2dxActivity extends NativeActivity{
	private AdView adView;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		
		setupAds(); 		
	}
	
	private void setupAds()  
    {  
        LinearLayout layout = new LinearLayout(this);  
        layout.setOrientation(LinearLayout.VERTICAL);  
        addContentView(layout, new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT));  
        adView = new AdView(this); 
	    adView.setAdSize(AdSize.BANNER);
	    adView.setAdUnitId("a15289ac58b83d3");
        
        layout.addView(adView);  
        
	    AdRequest adRequest = new AdRequest.Builder()
        .addTestDevice(AdRequest.DEVICE_ID_EMULATOR)
        .addTestDevice("014E05DF0400B016")
        .build();
	    
        adView.loadAd(adRequest);  
    }   
}
