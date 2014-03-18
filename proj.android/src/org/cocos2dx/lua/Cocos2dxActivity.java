package org.cocos2dx.lua;

import android.app.NativeActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Gravity;
import android.view.ViewGroup.LayoutParams;
import android.view.ViewGroup.MarginLayoutParams;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.PopupWindow;

import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.AdSize;
import com.google.android.gms.ads.AdView;

public class Cocos2dxActivity extends NativeActivity{
	private AdView adView;
    private PopupWindow popUp;
    private static Cocos2dxActivity _activity;
    private LinearLayout layout;
    private LinearLayout mainLayout;
    boolean adsinited = false;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		
		getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        _activity = this;
        // Create our ad view here
        adView = new AdView(this);
                // you can get the ID from Admob
        adView.setAdUnitId("a15289ac58b83d3");
        adView.setAdSize(AdSize.BANNER);
        adView.setAdListener(new AdmobListener());	
	}
	
	public static void showAdPopup(){
        _activity._showAdPopup();
    }
	
	public void _showAdPopup() {
        if (adsinited) {
            return;
        }
        if (adView != null) {
            _activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    adsinited = true;
                    // Out popup window
                    popUp = new PopupWindow(_activity);

                    // This is the minimum size for AdMob, we need to set this
                    // in case our target device run at 320x480 resolution
                    // (Otherwise no ad will be shown, see the padding kill
                    // below)

                    popUp.setWidth(320);
                    popUp.setHeight(50);
                    popUp.setWindowLayoutMode(LayoutParams.WRAP_CONTENT,
                            LayoutParams.WRAP_CONTENT);
                    popUp.setClippingEnabled(false);

                    layout = new LinearLayout(_activity);
                    mainLayout = new LinearLayout(_activity);

                    // The layout system for the PopupWindow will kill some
                    // pixels due to margins/paddings etc¡­ (No way to remove
                    // it), so padd it to adjust
                    layout.setPadding(-5, -5, -5, -5);

                    MarginLayoutParams params = new MarginLayoutParams(
                            LayoutParams.WRAP_CONTENT,
                            LayoutParams.WRAP_CONTENT);

                    params.setMargins(0, 0, 0, 0);
                    layout.setOrientation(LinearLayout.VERTICAL);
                    layout.addView(adView, params);
                    popUp.setContentView(layout);
                    _activity.setContentView(mainLayout, params);
                                        // you can get the TestDevice ID from the output of logcat .
                    AdRequest adRequest = new AdRequest.Builder()
                            .addTestDevice("03AD7BF0E367194965CC114581CFCEB1")
                            .build();
                    // Enable this if your are testing AdMob, otherwise you'll
                    // risk to be banned!
                    _activity.adView.loadAd(adRequest);
                    // Show our popup window
                    
                    popUp.update();

                }
            });
        }
	}
	
	private class AdmobListener extends AdListener {
        @Override
        public void onAdClosed() {
            super.onAdClosed();
        }

        @Override
        public void onAdFailedToLoad(int errorCode) {
            super.onAdFailedToLoad(errorCode);
        }

        @Override
        public void onAdLeftApplication() {
            super.onAdLeftApplication();
        }

        @Override
        public void onAdLoaded() {
            super.onAdLoaded();
            popUp.showAtLocation(mainLayout, Gravity.BOTTOM, 0, 0);
        }

        @Override
        public void onAdOpened() {
            super.onAdOpened();
        }
    }

    @Override
    public void onDestroy() {
        if (adView != null) {
            adView.destroy();
        }
        super.onDestroy();
    }
 
}
