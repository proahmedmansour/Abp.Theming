using Abp.Theming.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Abp.Theming.Permissions;

public class ThemingPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(ThemingPermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(ThemingPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<ThemingResource>(name);
    }
}
