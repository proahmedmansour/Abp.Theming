using Volo.Abp.Settings;

namespace Abp.Theming.Settings;

public class ThemingSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(ThemingSettings.MySetting1));
    }
}
