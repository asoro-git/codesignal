
Set-Alias lvim 'C:\Users\Study\.local\bin\lvim.ps1'

# Import the Chocolatey Profile that contains the necessary code to enable
# tab-completions to function for `choco`.
# Be aware that if you are missing these lines from your profile, tab completion
# for `choco` will not function.
# See https://ch0.co/tab-completion for details.


#
#    {
#      "alignment": "right",
#      "segments": [
#        {
#          "foreground": "#003543",
#          "background": "#00c983",
#          "type": "time",
#          "style": "diamond",
#          "leading_diamond": "\ue0b6",
#          "trailing_diamond": "\ue0b4",
#          "properties": { "time_format": "15:04:05" },
#          "template": "\uf017 {{ .CurrentDate | date .Format }}"
#        }
#      ],
#      "type": "rprompt"
#    }
#


$ChocolateyProfile = "$env:ChocolateyInstall\helpers\chocolateyProfile.psm1"



if (Test-Path($ChocolateyProfile)) {
  Import-Module "$ChocolateyProfile"
}
oh-my-posh init pwsh --config 'C:/Users/Study/AppData/Local/Programs/oh-my-posh/themes/asoro-customized.omp.json' | Invoke-Expression


$Global:__OriginalPrompt = $function:Prompt

function prompt {
    # put cursor at the bottom of the buffer
    $rawUI = (Get-Host).UI.RawUI
    $cp = $rawUI.CursorPosition
    $cp.Y = $rawUI.BufferSize.Height - 1	
    $rawUI.CursorPosition = $cp

    # and the prompt itself
    $Global:__OriginalPrompt.Invoke()
}
